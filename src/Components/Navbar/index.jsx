import React, { useState, useEffect } from 'react'
import { NavLink, useLocation  } from 'react-router-dom'
import "./style.css"

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");
    const [ activeIndex, setActiveIndex ] = useState(0);
    
    const location = useLocation()
    const paths = ['/',
    '/blogs',
    '/quotes',
    '/jokes',
    '/about',
    '/contact']

    useEffect(() => {
       setActiveIndex(paths.indexOf(location.pathname))
    })

    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }
    return (
        <div className="headWrapper z-[1] h-[75px] md:h-[100px]">
            <div className="header h-full ">
                <NavLink to={'/'} >
                    <div className='flex justify-center items-center'>
                        <div className="logo">
                            <img className='w-[100px] lg:w-[130px]' src="assets/logo.png" alt="" />
                        </div>
                        <div className='invisible lg:visible text-[25px] logotext'>
                            Sarcastic Cowboy
                        </div>
                    </div>
                </NavLink>
                <div className={active} >
                    <ul className='appleFont' >
                        <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(0)}} className={activeIndex == 0 ? 'active_item' : 'menu_item'} to={'/'} > Home </NavLink></li>
                        <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(1)}} className={activeIndex == 1 ? 'active_item ' : 'menu_item'} to={'/blogs'} > Blogs </NavLink></li>
                        <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(2)}} className={activeIndex == 2 ? 'active_item ' : 'menu_item'} to={'/quotes'} > Quotes </NavLink></li>
                        <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(3)}} className={activeIndex == 3 ? 'active_item ' : 'menu_item'} to={'/jokes'} > Jokes </NavLink></li>
                        <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(4)}} className={activeIndex === 4 ? 'active_item ' : 'menu_item'} to={'/about'} > About </NavLink></li>
                        <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(5)}} className={activeIndex === 5 ? 'active_item ' : 'menu_item'} to={'/contact'} > Contact </NavLink></li>
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