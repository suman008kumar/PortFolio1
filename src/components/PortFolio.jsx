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

function PortFolio() {
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
        }
    ]
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" border font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110  hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:border-blue-700 duration-300 bg-blue-50 border-pink-500"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
              View
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                <spring/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;