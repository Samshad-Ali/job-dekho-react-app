import React, { useEffect, useState } from 'react'
import {GrSearch} from 'react-icons/gr';
import { getDataThunk } from '../redux/slice/jobSlice';
import {useDispatch,useSelector} from 'react-redux'
import Card from '../components/Card';
const Home = () => {
  const dispatch=useDispatch();
  const data = useSelector(state=>state.jobReducer.data)
      const [input,setInput] = useState('')
      const [query,setQuery] = useState('web Developer')
      const handleSearchBtn=()=>{
        setQuery(input)
      }
  useEffect(()=>{
    dispatch(getDataThunk(query))
  },[query])
  return (
    <main className='home'>
      <div className="container flex-center">
      <h1>Welcome to  <span>Job hub</span></h1>
      <div className='search-box flex-center'>
      <input type="text" name='search' id='search' placeholder='Enter programming language here...' 
      onChange={(e)=>{setInput(e.target.value)}}
      />
      <button onClick={handleSearchBtn} className='btn'>
        <GrSearch/>
      </button>
      </div>
     <div className='card-container flex-center'>
      {
      data.length>0?  data?.map((item,id)=>{
          return <Card key={id} data={item} />
        })
        : <p className='loading'>Loading.....</p>
      }
     </div>
      </div>
    </main>
  )
}

export default Home