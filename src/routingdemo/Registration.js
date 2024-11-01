import React, { useState } from 'react'

export default function Registration() 
{

  const [formdata,setFormData] = useState(
    {
      name:"",
      gender:"",
      email:"",
      password:"",
      contact:"",
      location:""
    }
  )

  const handleChange = (e) =>{
    console.log(e)
    setFormData({...formdata,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formdata)
  }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>Enter Name</label>
          <input type='text' id='name' value={formdata.name} onChange={handleChange} required />
          <label>Select Gender</label>
          <select id="gender" onChange={handleChange} value={formdata.gender} required>
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <label>Enter Email</label>
          <input type='text' id='email' onChange={handleChange} required />
          <label>Enter PassWord</label>
          <input type='password' id='password' onChange={handleChange} required />
          <label>Enter Contact</label>
          <input type='number' id='contact' onChange={handleChange} required />
          <label>Enter Location</label>
          <input type='text' id='location' onChange={handleChange} required />
          <input type='submit' value='Register'/>
          <input type='reset' value='Reset'/>
        </form>
    </div>
  )
}
