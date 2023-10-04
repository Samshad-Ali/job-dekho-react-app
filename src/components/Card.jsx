import React from 'react'
import img from '../assets/image.gif'
import { useNavigate } from 'react-router-dom';
const Card = ({data}) => {
    const navigate=useNavigate();
    const {
        job_country,
        employer_logo,
        employer_name,
        job_title,
        job_id
    } = data;
    const handleBtn=(id)=>{
        console.log(id)
        navigate(`/jobdetails/${id}`)
    }
  return (
    <div className='card'>
        <div className='title'>
        <p>
            {job_title}
        </p>
        <span>{job_country}</span>
        </div>
        <div className='name'>
        <p>
            {employer_name}
        </p>
        <img src={employer_logo?employer_logo:img} alt="logo" />
        </div>
        <button onClick={()=>{handleBtn(job_id)}} >Read More</button>
    </div>
  )
}

export default Card