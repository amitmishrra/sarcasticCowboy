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
            <main className="md:p-0 pt-[100px] p-10 min-h-[100vh] flex items-center justify-center">
                <section className="homeSec max-w-7xl flex lg:flex-row flex-col items-center justify-between">
                    <div className="frst flex flex-col items-center justify-center">
                        <div>
                            <div className="greet text-[75px] lg:text-[90px] mb-[10px] text-center lg:text-left logotext">
                                {greet[index]}
                            </div>
                            <div className="txtGrp w-[100%] text-center lg:text-left">
                                <h1 className="tiTle">Sarcastic Cowboy here.</h1>
                                {/* <h2 className="subTitle textFont">Crack Jokes, Not Hearts</h2> */}
                                <p className=" text-justify mt-3">
                                    This blog is created with an intent to entertain and not educate. I write short articles, jokes to lift up your mood and make you smile with my words, at times you may not find it funny, so just bear with me as I am still sharpening my craft and everyone is born nude not funny and mastering comedy requires time.
                                </p>


                            </div>
                            <div className="btnGrp flex flex-col md:items-start">
                                <div className="flex gap-5 items-center justify-center">
                                    <NavLink to="/about" className={'flex justify-center items-center w-max lg:justify-start mt-6'}>
                                        <button className='KNowButton'>Know More</button>
                                    </NavLink>
                                    <NavLink to="/blogs" className={'flex justify-center items-center w-max lg:justify-start mt-6'}>
                                        <button className='blogsButton'>Read Blogs</button>
                                    </NavLink>
                                </div>
                                <div className="social gap-3 hidden lg:flex">
                                    <a target={"_blank"} href="https://www.facebook.com/SarcasticCowboy/">
                                        <FacebookIcon className='socialMedia' fontSize="large" />
                                    </a>
                                    <a target={"_blank"} href="https://twitter.com/SarcasticCowboy?t=cWfGGLY0dvPcJXmzEo65zQ&s=09">
                                        <TwitterIcon className='socialMedia' fontSize="large" />
                                    </a>
                                    <a target={"_blank"} href="https://www.instagram.com/sarcasticcowboy/">
                                        <InstagramIcon className='socialMedia' fontSize="large" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scnd mt-4 flex items-center justify-center md:justify-end">
                        <img src="assets/homePage.jpg" className=" object-cover h-[350px] md:h-max" alt="" />
                        {/* <img src="assets/home2.jpg" className="img2 absolute borderShadow" alt="" /> */}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home