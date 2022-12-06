import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from "react-router-dom"
import "./styles.css"
import React, { useState } from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [ loading, setLoading ] = useState(false);
    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function () {
                var index = list.indexOf(this);
                if (index !== -1) {
                    list.splice(index, 1);
                }
                if (list.length === 0) {
                    setLoading(true);
                }
            }
            list.push(img);
            img.src = array[ i ];
        }
    }

    useEffect(() => {
      
        const imageUrls = [
           "assets/jokes/(1).jpeg",
           "assets/jokes/(2).jpeg",
           "assets/jokes/(3).jpeg",
           "assets/jokes/(4).jpeg",
           "assets/jokes/(5).jpeg",
           "assets/jokes/(6).jpeg",
           "assets/jokes/(7).jpeg",
           "assets/jokes/(8).jpeg",
           "assets/jokes/(9).jpeg",
           "assets/jokes/(10).jpeg",
           "assets/jokes/(11).jpeg",
           "assets/jokes/(12).jpeg",
           "assets/jokes/(13).jpeg",
           "assets/jokes/(14).jpeg",
           "assets/jokes/(15).jpeg",
           "assets/jokes/(16).jpeg",
           "assets/jokes/(17).jpeg",
           "assets/jokes/(18).jpeg",
           "assets/jokes/(19).jpeg",
           "assets/jokes/(20).jpeg",
           "assets/jokes/(21).jpeg",
           "assets/jokes/(22).jpeg",
           "assets/jokes/(23).jpeg",
           "assets/jokes/(24).jpeg",
           "assets/jokes/(25).jpeg",
           "assets/jokes/(26).jpeg",
           "assets/jokes/(27).jpeg",
           "assets/jokes/(28).jpeg",
           "assets/jokes/(29).jpeg",
           "assets/jokes/(30).jpeg",
           "assets/jokes/(31).jpeg",
           "assets/jokes/(32).jpeg",
           "assets/jokes/(33).jpeg",
           "assets/jokes/(34).jpeg",
           "assets/jokes/(35).jpeg",
           "assets/jokes/(36).jpeg",
           "assets/jokes/(37).jpeg",
           "assets/jokes/(38).jpeg",
           "assets/jokes/(39).jpeg",
           "assets/jokes/(40).jpeg",
           "assets/jokes/(41).jpeg",
           "assets/jokes/(42).jpeg",
           "assets/jokes/(43).jpeg",
           "assets/jokes/(44).jpeg",
           "assets/jokes/(45).jpeg",
           "assets/jokes/(46).jpeg",
           "assets/jokes/(47).jpeg",
           "assets/jokes/(48).jpeg",
           "assets/jokes/(49).jpeg",
           "assets/jokes/(50).jpeg",
           "assets/jokes/(51).jpeg",
           "assets/jokes/(52).jpeg",
           "assets/jokes/(53).jpeg",
           "assets/jokes/(54).jpeg",
           "assets/jokes/(55).jpeg",
           "assets/jokes/(56).jpeg",
           "assets/jokes/(57).jpeg",
           "assets/jokes/(58).jpeg",
           "assets/jokes/(59).jpeg",
           "assets/images/dating.jpeg",
           "assets/images/Save.jpeg",
           "assets/homePage.jpg",
        ]
        preloadImages(imageUrls)
    }, [])

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