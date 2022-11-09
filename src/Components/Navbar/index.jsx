import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");
    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }

    console.log(active);
    return (
        <div className="headWrapper z-[1] h-[75px] md:h-[100px]">
            <div className="header h-full ">
                <div className='flex justify-center items-center'>
                    <div className="logo">
                        <img className='w-[150px] md:w-[130px]' src="assets/logo.png" alt="" />
                    </div>

                    <div className='invisible md:visible text-[40px] logotext'>
                        Sarcastic Cowboy
                    </div>
                </div>

                <div className={active} >
                    <ul className='appleFont' >
                        <li onClick={navToggle}><NavLink to={'/'} > Home </NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/blogs'} > Blogs </NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/buzz'} > Buzz </NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/about'} > About </NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/contact'} > Contact </NavLink></li>
                    </ul>
                </div>

                <div onClick={navToggle} className={togglerIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </div>
        </div>
    )
}