import React from 'react'
import { NavLink } from "react-router-dom"

const Miniblog = ({ Title, heading, paragraph, imgURL, Date }) => {
    return (
        <>
            <NavLink to={Title}>
                <div className="container flex items-center my-3 p-3 rounded-md md:w-fit shadow-md shadow-[#9b9b9b] md:hover:shadow-xl md:shadow-black">
                    <img src={imgURL} className=" object-cover h-[100px] w-[40%] rounded" alt="" />
                    <div className="  w-[60%] pl-3 rounded-b-2xl gap-2  flex flex-col items-start ">
                        <h1 className="text-lg md:text-xl font-medium ">
                            {heading.slice(0,35)}...
                        </h1>
                        {/* <p>{paragraph.slice(0, 50)}</p> */}
                        <p>
                            {Date}
                        </p>
                    </div>
                    {/* <div className="img h-[200px] w-[200px] md:h-[300px] md:w-[400px] rounded-xl"></div> */}
                </div>
            </NavLink>
        </>
    )
}

export default Miniblog
