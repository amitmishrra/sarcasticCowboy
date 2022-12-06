import React from "react";
import Jokes from "./jokes";
import { Blogdata } from "../../Blog";
import Miniblog from "../../../Components/miniblog";
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';

const image = [[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
], [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
], [
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
], [
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40
], [
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
], [
    51, 52, 53, 54, 55, 56, 57, 58, 59
]]

const JokesPage = () => {
    const [JokesData, setJokesData] = useState([]);
    const [index, setIndex] = useState(1);
    const pages = [1, 2, 3, 4, 5]


    // useEffect(() => {
    //     fetch("https://sarcasticbackend.vercel.app/getJokes").then(res => res.json()).then(res => setJokesData(res.reverse()))
    // })

    return (
        <>
            <main className=" pt-[70px] md:pt-[100px] min-h-[100vh] flex flex-col md:flex-row">
                <section class="md:w-[70%] flex flex-col items-center justify-between gap-5">
                    <div className=" flex flex-col items-center gap-5">
                        {
                            image[index - 1].map((item) => {
                                // console.log(item)
                                return (
                                    <img className="md:max-w-[600px] p-5"
                                        src={"assets/jokes/(" + [item] + ").jpeg"} alt="" />
                                )
                            })
                        }
                    </div>

                    <div className="flex items-center justify-center w-2/3">
                        <ul className="flex justify-around gap-5 w-full bg-orange-400">
                            {
                                pages.map((item) => {
                                    return (
                                        <li>
                                            <button onClick={() => { setIndex(item) }}>
                                                {item}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>

                <section className="rightSec p-10 md:px-5  md:py-[20px] border-t-2 md:border-t-0 md:border-l border-[#cecece] md:sticky md:top-[100px] right-0 md:w-[30%] md:h-[100vh] flex items-start justify-center ">
                    <div className="flex flex-col items-start justify-center">
                        <p className="md:text-2xl mb-5 text-lg font-medium" >
                            More from Sarcastic Cowboy</p>
                        {/* <div className="flex flex-col items-center justify-center "> */}

                        {
                            Blogdata.map((item) => {
                                return (
                                    <Miniblog
                                        Title={item.Title}
                                        heading={item.heading}
                                        paragraph={item.paragraph}
                                        imgURL={item.imgURL}
                                        Date={item.Date}
                                    />
                                )
                            })
                        }
                        {/* </div> */}
                    </div>
                </section>
            </main>
        </>
    )
}

export default JokesPage