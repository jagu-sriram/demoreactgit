import React, { useEffect, useState } from 'react'
import empdata from './data.json'

export default function APIDemo2() 
{
    const [data,setData] = useState([]) // empty array

    useEffect(() => {
        setData(empdata)
    }, []); // no input or dependency


  return (
    <div>
        <h3>JSON Demo</h3>
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
            </tr>
       {
          data.map((emp,index)=>(
            <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
           </tr>
          ))
       }
       </table>
    </div>
  )
}
