import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { particularData } from '../redux/slice/jobSlice';
import { useNavigate, useParams } from 'react-router-dom';
import img from '../assets/image.gif'
const JobDetail = () => {
    const params = useParams();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const data = useSelector(state=>state.jobReducer.data)[0];
    const {
        job_country,
        employer_logo,
        employer_name,
        job_required_skills,
        job_title,
        job_description
    } = data;
    const handleApplyBtn=()=>{
        navigate('/apply')
    }
    useEffect(()=>{
        dispatch(particularData(params.id))
    },[])
  return (
    <div className='box flex-center'>
        <h2>Job Details</h2>
    <div className='card-details'>
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
        <div className='desc-box'>
            <span>Description</span>
        <p className='desc'>{job_description}</p>
        </div>
        <div className='skills-box'>
        <span>Required skills</span>
        <p className='skills'> {job_required_skills ? job_required_skills : "Web Development"} </p>
        </div>
            <button onClick={handleApplyBtn} >Apply</button>
    </div>
    </div>
  )
}

export default JobDetail