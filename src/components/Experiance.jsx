import React from 'react'
import java from "../../public/java.png"
import javascript from"../../public/javascript.png"
import spring from "../../public/spring.png"
import springBoot from"../../public/springBoot.jpg"
import reactjs from"../../public/reactjs.png"
import html from"../../public/html.png"
import node from"../../public/node.png"
import css from"../../public/css.jpg"
import corejava from"../../public/corejava.png"
import DSA from"../../public/DSA.jpeg"

function Experiance() {
    const cardItem=[
        {
            id:1,
            logo:java,
            name:"JAVA",
        },
        {
             id:2,
             logo:spring,
             name:"Spring",
        },
        {
            id:3,
            logo:springBoot,
            name:"SpringBoot",
        },
        {
            id:4,
            logo:javascript,
            name:"JavaScript",
        },
        {
            id:5,
            logo:reactjs,
            name:"ReactJs",
        },
        {
            id:6,
            logo:html,
            name:"HTML",
        },
        {
            id:7,
            logo:node,
            name:"Node",
        },
        {
            id:8,
            logo:css,
            name:"CSS",
        },
        {
            id:9,
            logo:corejava,
            name:"CORE JAVA",
        },
        {
           id:10,
           logo:DSA,
           name:"DSA",
        },
        
    ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-10 mt-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p >I've more than 2 years of experiance in below technologies.

</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
            className="flex flex-col items-center justify-center border-[2px] border-blue-500 rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110  hover:bg-gradient-to-r from-blue-300 to-red-300 hover:border-yellow-500 duration-300 transform transition-all ease-in-out"


              key={id}
            >
              <img
                src={logo}
                className="w-[150px]  p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;