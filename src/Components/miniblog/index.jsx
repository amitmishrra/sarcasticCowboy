import React from 'react'
import { NavLink } from "react-router-dom"

const Miniblog = ({ heading, paragraph, imgURL }) => {
    return (
        <>
            <NavLink to="/mainBlog">
                <div className="container flex items-center p-3 gap-8 my-5 md:m-5 md:w-fit rounded-md bg-gray-200 borderShadow">
                    <img src={imgURL} className=" object-cover w-[100px] h-[100px] md:w-[30%] md:h-full rounded" alt="" />
                    <div className=" w-full p-3 rounded-b-2xl flex items-center justify-center ">
                        <h1 className="text-lg md:text-xl font-medium mb-3">{heading}</h1>
                        {/* <p>{paragraph.slice(0, 100)}</p> */}
                    </div>
                    {/* <div className="img h-[200px] w-[200px] md:h-[300px] md:w-[400px] rounded-xl"></div> */}
                </div>
            </NavLink>
        </>
    )
}

export default Miniblog
