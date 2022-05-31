import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Data1 = () => {

  const[data, setData]=useState([]);

  const func=async()=>{
    const apiData=await axios.get(`http://localhost:8000/api/admin-dash`)

    setData(apiData.data)
  }
  useEffect(()=>{
    func();
       
      },[])


  return (
    <div className='mainbox'>
                <div  className="box"> 
                  <p>
                    <b> ID No.:</b> {data.id}<br></br>
                    <b> Name:</b> {data.name}<br></br>
                    <b>  Email:</b> {data.phone}<br></br>
                  </p>
                </div>        
    </div>
  )
  
}

export default Data1