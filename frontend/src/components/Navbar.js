"use client";
import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <div className=" w-full flex items-center justify-center p-10">
    <div className="flex flex-row gap-x-10 items-center justify-center w-1/2  bg-black p-4 rounded-3xl text-xl font-serif font-bold shadow-md  shadow-slate-300  ">
      <div className="hover:text-blue-600">
        <Link href="/">
            Home
        </Link>
      </div>
      <div className="hover:text-blue-600">
        <Link href="/CreateStudent">
            Create Student
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
