"use client"
import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';
import axios from 'axios';

import Link from 'next/link';

function page() {
    //to get parametor from Student Component
    const searchParams = useSearchParams();
    const idStudent = searchParams.get('idStudent');
    
    const id=idStudent


    const[name,setName]=useState("DEFAULT")
    const[_class,setClass]=useState("DEFAULT")
    const[roll_number,setRoll]=useState(0)

   //calling API for specific student acoording to id
    useEffect(()=>{
        try {
          const res =  axios.post('http://localhost:8000/api/v1/getStudentById',{id})
          .then((res) => {
            console.log("success==",res.data);
            setName(res.data.name)
            setClass(res.data._class)
            setRoll(res.data.roll_number)
          })
          
          
        } catch (error) {
          console.log(error)
        }
      },[])

      //function to deleting a specific student According to ID
      const handleDelete=(()=>{
        axios.delete("http://localhost:8000/api/v1/deleteStudent",{data :{
          id : id
        }})
        .then((res)=>{
          console.log("data send for deletion successfully",res);
            alert("Student Deleted successfully")
          
        })
        .catch((error)=>{
          console.log("Error during calling api of delete note",error);
        }
        )
      })
    
  return (
    <div >
        <h1 className="text-center font-bold text-3xl  font-serif pb-8">Here is all about a particular student detail</h1>
        <div className="flex  justify-center text-black h-[300px] pb-6  ">
            <div className="flex flex-col gap-y-4 w-1/2 bg-gray-200 p-10   rounded-3xl shadow-xl shadow-slate-400">
                <div className="flex items-center justify-center p-4">
                    <h1 className="font-bold text-xl">Name:</h1>
                    <p>{name}</p>
                </div>
                
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">Class:</h1>
                    <p>{_class}</p>
                </div>
                
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">roll_number:</h1>
                    <p>{roll_number}</p>
                </div>
                
            </div>
            
        </div>
        <div className="flex items-center justify-center pb-20 mb-20">
            <Link className='px-10' href={{ pathname: '/Update', query: { idUpdate: id } }}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20  rounded">
                    Update
                </button>
            </Link>
            <Link  href="/">
                <button onClick={handleDelete} className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-20 rounded">
                    DELETE
                </button>
            </Link>

        </div>
        {/* <h1>{greeting}</h1> */}
        <Footer/>
        
    </div>
  )
}

export default page
