import React from "react"
import Miniblog from "../miniblog"
import { Blogdata } from "../../pages/Blog"

const Article = ({
    Heading , subtitle, img1, img2, parag1, parag2, parag3, parag4, parag5, parag6, parag7, parag8, parag9, parag10, parag11
}) => {

    return (
        <>
            <main className=" relative pt-[75px] md:pt-[100px] flex flex-col md:flex-row  justify-between ">
                <section className="leftSec  md:w-[70%] flex flex-col md:items-center justify-center">
                    <div className=" px-10  md:px-20 gap-y-8 py-8 flex flex-col items-start">
                        <p className="text-2xl md:text-4xl font-bold ">
                            {Heading}
                        </p>

                        <p className=" text-lg md:text-2xl ">
                            {subtitle}
                        </p>

                        <img src={img1} alt="" />
                    </div>
                    <div className="parag px-10 md:px-20 flex flex-col items-start gap-y-8 pb-8 text-lg md:text-2xl ">
                        <p>
                            {parag1}
                        </p>
                        <p>
                            {parag2}
                        </p>
                        <p>
                            {parag3}
                        </p>
                        <p>
                            {parag4}
                        </p>
                        <p>
                            {parag5}
                        </p>
                        <p>
                            {parag6}
                        </p>
                        <img src={img2} alt="" />
                        <p>
                            {parag7}
                        </p>
                        <p>
                            {parag8}
                        </p>
                        <p>
                            {parag9}
                        </p>
                        <p>
                            {parag10}
                        </p>
                        <p>
                            {parag11}
                        </p>
                    </div>
                </section>
                <section className="rightSec md:py-[20px] md:sticky md:top-0 bottom-0 md:w-[30%] h-full md:bg-[#e6e6e6] flex items-center justify-center ">
                    <div className="flex flex-col items-center justify-center">
                        {
                            Blogdata.map((item) => {
                                return (
                                    <Miniblog
                                        heading={item.heading}
                                        paragraph={item.paragraph}
                                        imgURL={item.imgURL}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default Article