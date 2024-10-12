"use client"
import React from 'react'
import Footer from '@/components/Footer'
import {useState} from "react"
import axios from 'axios'
import { useRouter } from 'next/navigation'

function CreateStudent() {

    const [name, setName] = useState('')
    const [_class, setClass] = useState('')
    const router=useRouter()

    const [roll_number, setRollNumber] = useState('')
     //to create student detail
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("handle submit start")
        if(!(name && _class && roll_number))
          alert("All Fields are mandetory")
              try {
                await axios
                .post("http://localhost:8000/api/v1/registerUser",{name,_class,roll_number})
                .then((res) => {
                  console.log("data send successfully", res.data);
                  alert("Student Created successfully")
                  router.push("/")
                  });
              } catch (error) {
                console.log("error during calling save api",error);
              }
    }
  return (
    <div className="min-h-screen ">
        <div className ="w-screen flex flex-col items-center justify-center ">
            <h1 className="text-center p-6 text-2xl font-serif font-bold">Create Student detail</h1>
            <div className='bg-gray-950   w-80 rounded-xl shadow-xl shadow-green-300 flex flex-col justify-center items-center  m-10 mb-40  '>
                <div >
                    <div className='flex flex-col justify-center items-center'>
                    <label className='text-white'>Student Name</label>
                    <input onChange={(e) => setName(e.target.value)} type='name' className='bg-gray-700 p-2 rounded-lg w-60' />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                    <label className='text-white'>Student Class</label>
                    <input onChange={(e) => setClass(e.target.value)} type='string' className='bg-gray-700 p-2 rounded-lg w-60' />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                    <label className='text-white'>S roll_number</label>
                    <input onChange={(e) => setRollNumber(e.target.value)} type='Number' className='bg-gray-700 p-2 rounded-lg w-60' />
                    </div>
                    
                </div>
            
                <div className='m-10'>
                    <button onClick={handleSubmit} className='bg-blue-500 rounded-lg p-2 text-white px-8'>Send</button>
                </div>
            </div>
        </div>
        <div className="  ">
            <Footer/>
        </div>
    </div>
  )
}

export default CreateStudent