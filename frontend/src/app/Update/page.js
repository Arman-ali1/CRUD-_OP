"use client";
import React from 'react'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';

import axios from 'axios'

function page() {
    const searchParams = useSearchParams();
    const idUpdate = searchParams.get('idUpdate');
    console.log("greetinggggggggggggggggggggggg in update component",idUpdate);
    const id=idUpdate

    const [name, setName] = useState('')
    const [_class, setClass] = useState('')
    const router=useRouter()
   
    const handleUpdate=()=>{
        console.log("update")
        if(!(name && _class))
            alert("all field are required")
        //update api 
        axios.post('http://localhost:8000/api/v1/updateStudent',{
            id,
            name,
            _class
        })
        .then((res)=>{
            
            alert("data Updated successfuly")
            router.push("/");
           

        })
        .catch((error)=>{
            console.log(error)

        })

    }
  return (
    <div className="min-h-screen">
      <div className ="w-screen flex flex-col items-center justify-center ">
            <h1 className="text-center p-4 font-serif text-2xl font-bold">Update Student detail</h1>
            <div className='bg-gray-950   w-80 rounded-xl shadow-xl shadow-green-300 flex flex-col justify-center items-center  m-10 mb-52 '>
                <div >
                    <div className='flex flex-col justify-center items-center'>
                    <label className='text-white'>Name</label>
                    <input onChange={(e) => setName(e.target.value)} type='name' className='bg-gray-700 p-2 rounded-lg w-60' />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                    <label className='text-white'>Class</label>
                    <input onChange={(e) => setClass(e.target.value)} type='class' className='bg-gray-700 p-2 rounded-lg w-60' />
                    </div>
                    
                </div>
            
                <div className='m-10'>
                    <button onClick={handleUpdate} className='bg-blue-500 rounded-lg p-2 text-white px-8'>Update</button>
                </div>
            </div>
        </div>
        <div className="  ">
            <Footer/>
        </div>
    </div>
  )
}

export default page
