"use client";



import axios from 'axios'
import { useState ,useEffect} from "react";

import Note from "@/components/Note.js";
import Footer from '@/components/Footer';

export default function Home() {

 const [allData, setAllData]=useState([])
 //get All  student
    useEffect(()=>{
      try {
        const res =  axios.get('http://localhost:8000/api/v1/getAllStudents')
        .then((res) => {
          
  
          return res.data.students
        })
        .then((res)=>{
          
          setAllData(res)
        })
      
        
      } catch (error) {
        console.log(error)
      }
    },[])
 

  return (
    <div className="flex flex-col items-center justify-center ">
    <h1 className="text-4xl text-center font-bold font-serif  ">All Student Details</h1>
       <div className="flex justify-center items-center  p-10 mb-40">
        <div className="flex flex-wrap p-5 bg-black text-[#0077ff] border-2 border-gray-500  rounded-md box-border w-auto gap-2  h-auto justify-center shadow-2xl shadow-gray-500" >
        {allData.map((allData) => (
          <div key={allData.id}>
            <Note  {...allData} />
            
          </div>
        ))}
      </div>
      </div>
      <div className="w-full text-center ">
        <Footer/>
      </div>
    </div>
  );
}
