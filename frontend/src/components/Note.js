import React, { useState } from "react";



import Link from "next/link";




function Note({id,name,_class ,roll_number}) {
 
//   const navigate=useNavigate();
//   const Sclass = Sclass;
  const [s_id,setId] = useState(id);
  const [s_name,setName] = useState(name);
  const [s_class,setClass] = useState(_class);
  const [s_roll_number,setRoll] = useState(roll_number);
  



  
//card for particular student
  return (
    
     
      
      
        <div  className="bg-gray-600 text-black rounded-md hover:cursor-pointer">
          
          <Link href={{ pathname: '/Student', query: { idStudent: id } }}>
            <h3 className="title text-center">{s_name}</h3>
            
            <div className=" hover:cursor-pointer hover:text-black hover:bg-blue-600 w-56 h-60 bg-slate-300 " rows={15} cols={35} maxLength={150} >
            
              <div className="flex flex-col text-xl break-words">
                <h1>NAME:=<spam className="text-red-700 px-4 ">{s_name}</spam></h1>
                <h1>ID:=<spam className="text-red-700 px-4 ">{s_id}</spam></h1>
                <h1>CLASS:=<spam className="text-red-700 px-4">{s_class}</spam></h1>
                <h1>ROLL_NUMBER:=<spam className="text-red-700 px-4">{s_roll_number}</spam></h1>
              </div>
            </div>
            </Link>
          </div>
          
       
          
      
    
  );
}

export default Note;