import React from "react"
import { useState } from "react"
import "../Style.css"

const QuotesBuzz = ({ quote }) => {

    const [isActive, setIsActive] = useState(false);
    const [likes, setLike] = useState(0);
    const [classes, setClasses] = useState("");

    const handleLike = () => {
        setIsActive (current => !current);
        console.log(isActive);
        console.log(classes);
        if (isActive) {
            setLike(likes - 1);
        } else {
            setLike(likes + 1);
        }
    }

    return (
        <>
            <div class="container px-5 mx-auto ">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto flex items-start justify-between text-left border-b-2 py-5 ">
                    <p class=" pr-8 leading-relaxed text-base font-medium quoteTxt">
                        {quote.slice(0, 100)}
                    </p>

                    <div onClick={handleLike} className="heart-btn">
                        <div className={isActive? "content heart-active" : "content"}>
                            <span className={isActive? "heart heart-active": "heart"}></span>
                            <span className={isActive? "text heart-active": "text"}>LIkes</span>
                            <span className={isActive? "numb heart-active": "numb"}>{likes}</span>
                        </div>
                    </div>
                    {/* <div className="flex items-center mt-3 gap-3 ">
                        <button className="border bg-gray-50 rounded-md">Share</button>
                        <button className="border bg-gray-50 rounded-md">Copy</button>
                        
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default QuotesBuzz