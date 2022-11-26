import React, { useEffect } from 'react'
import OtherBlogs from "../../Components/OtherBlogs/Index"
export default function MainBlog() {

    return (
        <div className="mainBlog flex lg:flex-row w-[100%]  pt-[100px]">
            <div className="lefside lg:w-[80vw] ">
                <div className="heading headingFont font-[40px]">
                    3 Ds of My Life That Changed My Life Forever

                </div>
                <div className="subHeading">
                    Life has its own way of teaching, you just need to be good at picking those subtle hints
                </div>
                <div className="img">
                    <img src="assets/puppy.jpg" alt="" />
                </div>

                <div className="paragraph">
                    <p>
                    After waiting for 40 minutes, outside the cyber cafe, finally came my turn, I entered my roll number on the computer screen and waited anxiously for the result to load, the marks sheet was out. I had managed to complete my engineering with the first grade, there was a deep sigh of relief.
                    </p>

                   <p>
                   I stepped out to see some other friends outside the cafe, they all were cheerful and jumping with joy but to my surprise, I was not as happy and excited, the reason was I didn’t have any offer letter, few Tier-3 companies came in the last semester (as my college wasn’t the most reputed one in the city ) during campus placement but I was not fortunate or intelligent enough to crack those interviews.

                   </p>
                   
                   <p>
                   Now the only option left was to move to some metro city and try for off-campus selection, I moved city to city, spent months, attending off-campus interviews, in a few, I was lucky to get rejected in the first round, in others I was unfortunate to make till the last round but due to some unforeseen reasons, companies were shy to hand me the employment letter.
                   </p>

                   <p>
                   From 3 months, it became 9 months since graduation (9 months is a good time a woman can deliver a baby in that)and still, I was not having any job in hand. Asking money from parents with each passing month felt more embarrassing.

                   </p>
                   <p>
                   I was totally depressed, devastated, and defeated. Wearing the burden of these 3 Ds on my head, I found it heavy to lift myself up, and that too against notorious gravity which exists only to bring anything down. Reading motivational books like “You can win” — by Shiv Khera, watching videos of “Sandeep Maheshwari” on YouTube was not helping me either.
                   </p>

                    <p>
                    Tried waking up early in the morning (as per brown parents it can solve many of your problems) but by afternoon I was again feeling sleepy and tired. In a nutshell, nothing seemed to be working for me.

                    </p>

                </div>
            </div>

            <div className="reightSide  lg:w-[10vw]]">
                {/* {
                    data.map((item) => {
                        return (
                            <OtherBlogs
                                heading={item.heading}
                                paragraph={item.paragraph}
                                imgURL={item.imgURL}
                            />
                        )
                    })
                } */}
            </div>
        </div>
    )
}
