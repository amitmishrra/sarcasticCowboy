import React from "react";
import Jokes from "./jokes";
import { Blogdata } from "../../Blog";
import Miniblog from "../../../Components/miniblog";
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import './jokes.css'


const JokesPage = () => {
    const [JokesData, setJokesData] = useState([]);
    const [index, setIndex] = useState(1);
    const [initial, setInitial] = useState(0);
    const [final, setFinal] = useState(10);
    const [loader, setLoader] = useState(false)
    const [image, setImage] = useState("")
    const [smallImages, setSmallImages] = useState("flex")
    const [largeImage, setLargeImage] = useState("hidden")

    useEffect(() => {

        console.log("index changed : ", index)
        setTimeout(() => { setLoader(true) }, 2000)
        switch (index) {
            case 1: {
                setInitial(0);
                setFinal(12)
                break;
            }
            case 2: {
                setInitial(12);
                setFinal(24)
                break;
            }
            case 3: {
                setInitial(24);
                setFinal(36)
                break;
            }
            case 4: {
                setInitial(36);
                setFinal(48)
                break;
            }
            case 5: {
                setInitial(48);
                setFinal(59)
                break;
            }


            default:
                break;
        }
    }, [index])

    useEffect(() => {
        fetch("https://sarcasticbackend.vercel.app/getJokes").then(res => res.json()).then(res => setJokesData(res))
    })


    const previousPage = () => {
        setLoader(false)
        setIndex(index - 1)
        setTimeout(() => { setLoader(true) }, 2000)
    }

    const nextPage = () => {
        setLoader(false)
        setIndex(index + 1)
        setTimeout(() => { setLoader(true) }, 2000)
    }

    const showImage = (path) => {
        setImage(path)
        setSmallImages("md:hidden")
        setLargeImage("hidden md:flex")
    }

    const closeImage = ()=>{
        setSmallImages("md:flex")
        setLargeImage("md:hidden")
    }

    return (
        <>
            <main className=" pt-[70px] md:pt-[100px] min-h-[100vh] flex flex-col md:flex-row justify-center maxWidth">
                <section class=" flex flex-col items-center justify-center w-[100%]">
                    <div className={" flex-row flex-wrap items-center md:w-[90%] w-[85%] m-auto " + smallImages}>
                        {
                            loader ?

                                JokesData.slice(initial, final).map((item) => {
                                    return (
                                        <>
                                            <div onClick={() => { showImage(item.path) }}>
                                                <Jokes path={item.path} totalLikes={item.likes} id={item._id} />
                                            </div>
                                        </>
                                    )
                                })

                                :
                                <div className="flex w-[50%] m-auto justify-center flex-col items-center h-[70vh]">
                                    <div className="mb-4 text-[20px]">
                                        Loading Jokes...
                                    </div>
                                    <CircularProgress />
                                </div>

                        }
                    </div>


                    <div className={"largeImg w-[100vw] md:w-[70vw] flex flex-col justify-center items-center rounded-[10px] " + largeImage}>
                                <div className="cross text-[30px] flex justify-start items-center text-black w-[90%] cursor-pointer" onClick={closeImage}>
                                ╳
                                </div>

                        <img className="md:max-w-[600px] md:w-[40%] w-[100%] border rounded-[10px]"
                            src={image} alt="there is image" />
                    </div>

                    <div className={"flex items-center justify-between md:w-1/4 w-[50%] pb-4 "  + smallImages}>
                        <button className="leftButton" onClick={previousPage} disabled={index == 1 ? true : false}>
                            ← Previous
                        </button>

                        <div className="current">
                            {index}/6
                        </div>
                        <button className="rightButton" disabled={index == 5 ? true : false} onClick={nextPage}>Next →</button>

                    </div>
                </section>


            </main>
        </>
    )
}

export default JokesPage