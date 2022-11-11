import "./styleA.css"
import { NavLink } from "react-router-dom"
import React, { useState } from 'react'
import { useEffect } from 'react';

const About = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(first + 1)
    useEffect(() => {
        const intervalId = setInterval(() => {
            first === 3 ? setFirst(0) : setFirst(first + 1);
            second === 3 ? setSecond(0) : setSecond(second + 1);
        }, 3000)
        return () => clearInterval(intervalId);
    }, [first])

    return (
        <>
            <main className="pt-[60px]">
                <section className="frstSec flex flex-col md:flex-row items-center justify-center md:justify-between">

                    <div className="frst relative flex items-center justify-center mt-[30px] md:mt-0">
                        <img src={`assets/aboutPage/about1.jpg`} className="imge1 borderShadow" alt="" />
                        {/* <img src={`assets/aboutPage/about${second}.jpg`} className="imge2 absolute borderShadow invisible md:visible" alt="" /> */}
                    </div>
                    <div className="scnd flex flex-col items-start justify-center w-[1/2]">
                        <h1 className="md:text-[70px] text-[40px]">Sarcastic Cowboy</h1>
                        <p className="md:text-[22px] text-[20px] md:mt-6 mt-[6px]">
                            Hi and Welcome to Sarcastic Cowboy.
                            I am a blogger, copywriter, memer, self-acclaimed cricket expert, and movie buff.
                        </p>
                        <p className=" md:text-[22px] text-[20px] md:mt-6 mt-[6px]">
                            The full-time job that earns me money is about finding bugs and helping them get eliminated. No, you got it absolutely wrong I don’t work in a pest control company. Instead, I work in one of the leading IT companies located in India as a Senior Software Development Engineer in Test(SDET)  where my job is to code and find defects in the other’s code.
                        </p>
                    </div>


                </section>
                <section className="scndSec text-[20px]">
                    <p>
                        This is all about my 9-6 job
                        In part-time when bored with coding, I love to write, my interest in writing developed way back in school from writing love letters to my crush and it has continued till today. I have been funny and love to crack jokes since childhood and this reflects in my writing too. I mainly write jokes, create memes with only intent to make people laugh as I believe writing comedy always connects people easily, puts them in a better mood, gives them chance to unwind and relax.
                        I have started this blog to write short stories and articles to share my experience of life. I hope you will enjoy reading this too.
                    </p>
                    <div className="mt-8 text-center">
                        <h2>
                            I am also active on various social media platforms
                        </h2>
                        <p>Facebook : 8000+ Followers</p>
                        <p>Twitter: 2000+ Followers</p>
                        <p>Medium: Less than 1000 Followers</p>
                    </div>

                    <div className="mt-5 text-center">
                        <h1>
                            Thanks for being here !
                        </h1>
                        <p>
                            I just want to end up by saying that I hope you find this blog useful, funny, and informative. If you have any questions, comments or feedback reach out to me via
                            <NavLink to="/contact" className=" text-blue-500"> Contact Us</NavLink> page
                        </p>
                    </div>

                </section>
            </main>
        </>
    )
}
export default About