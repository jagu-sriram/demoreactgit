import React from 'react'
import { useState } from 'react'
import './style.css'

export default function Demo2()
{
    const [count,setCount] = useState(0)

    const increment = () =>{
        setCount(count+1)
    }

    const decrement = () =>{
        setCount(count-1)
    }
  return (
    <div>
        <h2>Counter App Using React Hooks</h2>
        Count = {count}<br/><br/>
        <button onClick={increment} className='button'>Increment</button>
        <button onClick={decrement} className='button'>Decrement</button>
    </div>
  )
}
