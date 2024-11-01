import React, { useState } from 'react'

export default function Login() {
  const [logindata,setLoginData]  = useState(
    {
      email:"",
      password:""
    }
  )

  const handleChange = (e) =>{
    console.log(e.target)
    setLoginData({...logindata,[e.target.id]:e.target.value})
  }

  const handleClick = (e) =>{
    e.preventDefault()
    console.log(logindata)
  }
  
  return (
    <div>
        <h2>I am in Login Page</h2>
        <form>
          <label>Enter Email:</label>
          <input type='email' id='email' onChange={handleChange} required value={logindata.email}/>
          <label>Enter Password:</label>
          <input type='password' id='password' onChange={handleChange} required value={logindata.password}/>
          <input type='submit' value='Login' onClick={handleClick} />

        </form>
    </div>
  )
}
