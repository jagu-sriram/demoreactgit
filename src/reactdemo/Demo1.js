import React, { useState } from 'react'
import './style.css'

export default function Demo1() {
   const [status,setStatus] = useState(true) // initial value
   // status is userdefined state object
   // setStatus is a method to change status value

   const change = () =>{
    setStatus(!status)
   }
  return (
    <div>
        <h2>React Hooks Demo</h2>
        {
            status?
            <p>KL University</p>:
            <p>K L E F</p>
        }
        <button onClick={change} className='button'>Change</button>
    </div>
  )
}
