"use client"
import { Navbar } from "@/components/navbar";
import { useState } from "react";


export default function Home() {

  const [count,setCount] = useState(0);

  return (
    <div className="">
      <Navbar/>
      <a href="#btn1"><div className="w-40 h-40 border border-black"></div></a>
      <div className="w-40 h-40 border border-black">{count}</div>
      <div onClick={()=>setCount(count+1)} className="w-40 h-40 border border-black"></div>
      <div className="w-40 h-40 border border-black"></div>
      <div className="w-40 h-40 border border-black"></div>
      <div id="btn1" className="w-40 h-40 border border-black"></div>
      <div id="btn1" className="w-40 h-40 border border-black"></div>
      <div id="btn1" className="w-40 h-40 border border-black"></div>
    </div>
  );
}