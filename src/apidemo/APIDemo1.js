import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import './apidemo1styles.css'

export default function APIDemo1() 
{
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    // promise is a JS object used to make any event either success or fail
    // promise contains 3 states i) waiting/pending  ii) resolve iii) reject
    // async is used to return the promise and await is used to wait for promise

    const fetchData = async () =>
    {
        try 
        {
           const response = await axios.get("https://jsonplaceholder.typicode.com/posts") 
           setData(response.data)
        } catch (error) 
        {
            setError(error.message)
        }
    }

    useEffect(() => {
       fetchData()
    }, []); // no input or no dependency

  return (
    <div className='container'>
        {
            data?
            <p>
                <table>
                    <tr>
                        <td>User ID</td>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                {
                    data.map( (post,index) =>(
                        <tr>
                        <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>Title:{post.title}</td>
                            <td>Body:{post.body}</td>
                        </tr>
                     ) )
                }
                </table>
            </p>:
            error?
            <p className='error'>{error}</p>:
            <p className='loading'>Fetching Data ...</p>
        }
    </div>
  )
}
