import React, { useEffect } from "react"
import { useState } from "react"
import "../Style.css"

let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

const QuotesBuzz = ({ quote, totalLikes, id }) => {

    const [isActive, setIsActive] = useState(likedItems.includes(id));
    const [likes, setLike] = useState(0 || totalLikes);
    const [classes, setClasses] = useState("");

    const handleLike = (currentId) => {
        setIsActive(current => !current);
        console.log(isActive);
        console.log(classes);
        if (isActive) {

            fetch(`https://sarcasticbackend.vercel.app/updateLikes/${id}`, {
                method: "PATCH",
                headers: {
                    "content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    newLike: totalLikes - 1
                })
            }).then(res => res.json()).then(res => console.log(res))

            setLike(likes - 1);

            if (likedItems.length == 1) {
                likedItems.splice(likedItems.indexOf(id));
            } else { likedItems.splice(likedItems.indexOf(id), likedItems.indexOf(id)); }



        } else {
            setLike(likes + 1);

            likedItems.push(id)

            fetch(`https://sarcasticbackend.vercel.app/updateLikes/${id}`, {
                method: "PATCH",
                headers: {
                    "content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    newLike: totalLikes + 1
                })
            }).then(res => res.json()).then(res => console.log(res))


        }


    }

    useEffect(() => {
        localStorage.setItem("likedItems", JSON.stringify(likedItems));
        console.log(likedItems)
    }, [likes])

    return (
        <>
            <div class="container px-6 mx-auto maxWidth">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto  text-left border-b-2 pt-5 pb-1 ">
                    <p class="leading-relaxed text-base font-medium quoteTxt">
                        {quote}
                    </p>

                    <div className="heart-btn">
                        <div className={isActive ? "content heart-active flex justify-center item-center w-[60px] mt-[10px]" : "content flex justify-center item-center w-[60px] mt-[10px]"}>
                            <span onClick={handleLike} className={isActive ? "heart heart-active" : "heart"}></span>
                            <span className={isActive ? "numb heart-active" : "numb"}>{likes}</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default QuotesBuzz