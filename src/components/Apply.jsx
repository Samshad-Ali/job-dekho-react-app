import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Apply = () => {
    const navigate=useNavigate();
    const handleSubmitBtn=()=>{
        toast.success("Application submit successfully.");
        navigate('/home')
    }
  return (
    <div className='form-box flex-center'>
        <h2>Fill Your Details</h2>
        <div className='form-details flex-center'>
        <div className='input-label flex-center'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
        </div>
        <div className='input-label flex-center'>
            <label htmlFor="email">Email</label>
            <input type="email" email="email" id="email" required />
        </div>
        <div className='input-label flex-center'>
            <label htmlFor="cover">Cover letter</label>
            <textarea name="cover" id="" cols="30" rows="10"></textarea>
        </div>
        <div className='input-label resume flex-center'>
            <label htmlFor="resume">Resume</label>
            <input type="file" id='resume' />
        </div>
        </div>
        <button className='submit' onClick={handleSubmitBtn} > Submit </button>
    </div>
  )
}

export default Apply