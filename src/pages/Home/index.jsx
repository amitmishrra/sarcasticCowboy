import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from "react-router-dom"
import "./styles.css"
import React, { useState } from 'react'
import { useEffect } from 'react';

const Home = () => {

    let greet = ['Hello World!', 'नमस्ते World!', 'Ciao World!', 'Hola World!', 'નમસ્તે World!', 'Hallo World!']

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            index === 5 ? setIndex(0) : setIndex(index + 1);
        }, 3000)
        return () => clearInterval(intervalId);
    }, [index])
    return (
        <>
            <main className="pt-[70px]">
                <section className=" flex md:flex-row flex-col items-center justify-center">
                    <div className="frst flex flex-col items-center justify-center">
                        <div className="greet text-[100px] mb-[10px] text-center md:text-left logotext">
                            {greet[index]}
                        </div>
                        <div >
                            <div className="txtGrp w-[100%] text-center md:text-left">
                                <h1 className="tiTle">Sarcastic Cowboy here.</h1>
                                <h2 className="subTitle textFont">Blogger | Copywriter | Memer</h2>

                            </div>
                            <div className="btnGrp flex flex-col items-start">
                                <NavLink to="/about" className={'flex justify-center items-center w-[100%] md:justify-start'}><button className='KNowButton'>Know More</button></NavLink>
                                <div className="social flex gap-3 invisible md:visible">
                                    <FacebookIcon className='socialMedia' fontSize="large" />
                                    <TwitterIcon className='socialMedia' fontSize="large" />
                                    <a target={"_blank"} href="https://www.instagram.com/sarcasticcowboy/">
                                        <InstagramIcon className='socialMedia' fontSize="large" />
                                    </a>
                                    <LinkedInIcon className='socialMedia' fontSize="large" />


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scnd relative flex items-center justify-center">
                        <img src="assets/home4.png" className="img1 " alt="" />
                        {/* <img src="assets/home2.jpg" className="img2 absolute borderShadow" alt="" /> */}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home