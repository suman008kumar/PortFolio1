import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiSemanticuireact } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import pic from "../../public/SMK.png";

function Home() {
  return (
    <>
    <div 
    name="Home"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">  
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
        <span className="text-xl">Welcome In My Feed</span>
        <div className="flex space-x-1 text-2-l md:text-4xl">
        <h1>Hello, I'm a</h1>
       {/* <span className="text-red-700 font-bold">Developer</span> */}
       <ReactTyped
          className="text-red-700 font-bold"
          strings={["Coder","Programmer","Developer","Web Developer","Engineer"]}
          typeSpeed={40}
          backSpeed={60}
          loop={true}
        />
        </div>
        <br />
        <p className="text-sm md:text-md text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
        </p>
        <br />
        {/* Social Media */}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-5 md:space-y-0">
        <div className=" space-y-2">
          <h1 className="font-bold ">Available on</h1>
          <ul className="flex space-x-5">
          <li>
          <a href="https://www.linkedin.com/in/suman-kumar-535s4242a/ " target="_blank" >
            <AiFillLinkedin className="text-2xl cursor-pointer"/>
            </a>
            </li>
            <li>
           <a href="https://mail.google.com/mail/u/0/#chat/home" target="_blank">
            <SiGmail className="text-2xl cursor-pointer"/>
            </a>
            </li>
          <li>
          <a href="https://t.me/SUMAN71" target="_blank">
            <BsTelegram className="text-2xl cursor-pointer"/>
            </a>
            </li>
          <li>
           <a href="https://leetcode.com/u/Suman-Kumar/" target="_blank">
            <SiLeetcode className="text-2xl cursor-pointer"/>
            </a>
            </li>
          <li>
          <a href="https://www.geeksforgeeks.org/user/sumankumar7542845565/" target="_blank">
            <SiGeeksforgeeks className="text-2xl cursor-pointer"/>
            </a>
            </li>
          </ul>
          
        </div>
        <div className=" space-y-2">
        <h1 className="font-bold">Currently working on</h1>
          <div className="flex space-x-5">
          <TbBrandMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
          <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
          <SiSemanticuireact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
          <RiNodejsLine className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
          
          </div>        
        </div>
        </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
        <img 
        src={pic}
         className="rounded-full md:w-[450px] md:h-[450px]"
         alt="" />
         </div>
         </div>
    </div>
    
    <hr />
    </>
  );
}

export default Home
