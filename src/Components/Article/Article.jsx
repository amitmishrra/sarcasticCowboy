import React from "react"
import Miniblog from "../miniblog"
import { Blogdata } from "../../pages/Blog"

const Article = ({
    Heading, Date, subtitle, img1, img2, parag1, parag2, parag3, parag4, parag5, parag6, parag7, parag8, parag9, parag10, parag11
}) => {

    return (
        <>
            <main className="maxWidth relative pt-[75px] md:pt-[100px] flex flex-col md:flex-row  justify-between ">
                <section className="leftSec  md:w-[70%] flex flex-col md:items-center justify-center">
                    <div className=" px-8  md:px-8 gap-y-4 md:gap-y-8 py-8 flex flex-col items-start">
                        <p className="text-2xl md:text-4xl font-bold headingText">
                            {Heading}
                        </p>

                        <p className=" text-lg md:text-xl ">
                            Published on: {Date}
                        </p>

                        <p className=" text-lg md:text-2xl font-[source-serif-pro]   empty:hidden">
                            {subtitle}
                        </p>

                        <img src={img1} alt="" />
                    </div>
                    <div className="parag px-8 flex flex-col items-start gap-y-8 pb-8 text-justify text-lg md:text-2xl font-[source-serif-pro] ">
                        <p className="empty:hidden">
                            {parag1}
                        </p>
                        <p className="empty:hidden">
                            {parag2}
                        </p>
                        <p className="empty:hidden">
                            {parag3}
                        </p>
                        <p className="empty:hidden">
                            {parag4}
                        </p>
                        <p className="empty:hidden">
                            {parag5}
                        </p>
                        <p className="empty:hidden">
                            {parag6}
                        </p>
                        <img className="empty:hidden" src={img2} alt="" />
                        <p className="empty:hidden">
                            {parag7}
                        </p>
                        <p className="empty:hidden">
                            {parag8}
                        </p>
                        <p className="empty:hidden">
                            {parag9}
                        </p>
                        <p className="empty:hidden">
                            {parag10}
                        </p>
                        <p className="empty:hidden">
                            {parag11}
                        </p>
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

export default Article