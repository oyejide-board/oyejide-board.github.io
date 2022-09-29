import { useState } from "react";
import {BiMenu, BiX}  from "react-icons/bi";

export default function Navs () {


 const [mbtn, setmbtn] = useState (false)
 const handleMenu = () => {
    setmbtn(!mbtn)
 }
 return (<div className=" sticky top-0 bg-gray-800">
    <nav className="relative container text-white  mx-auto p-6">
        <div className=" flex flex-row justify-between  max-w-4xl mx-auto">
<div className="pt-1 md:text-4xl mt-3 md:mt-0 text-2xl"><span className="md:text-6xl text-4xl">O</span>yej<span className="">ide</span></div>

<div className={ mbtn ? "flex flex-col space-y-10  text-black  text-xl rounded-xl absolute inset-x-5 top-[150px] mt-25 bg-white text-center     " : "Menu mt-7 text-xl  space-x-12 mr-10  hidden md:flex"}>
<a href="#Home" smooth className= "pt-10 md:pt-0 active:bg-red-500" >Home</a>
<a href="#hyi">AboutMe</a>
<a href="#hyi">Experience</a>
<a href="#hyi" className=" pb-10">Contact</a>
</div>
<div className =" pt-5 absolute right-12 md:hidden" onClick={handleMenu}>{!mbtn ? <BiMenu size={30}/> : <BiX size={35}/> }</div>
</div>

    </nav>
    </div>
 )


}