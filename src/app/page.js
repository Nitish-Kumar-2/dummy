"use client"
import { Button } from "@/components/Generic/button";
import { Navbar } from "@/components/navbar";
import { useState } from "react";


export default function Home() {

  const [count,setCount] = useState(0);

  return (
    <div className="">
      <div className="w-52 h-52 border-2 border-black p-4">
        <Button>Home</Button>
      </div>
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