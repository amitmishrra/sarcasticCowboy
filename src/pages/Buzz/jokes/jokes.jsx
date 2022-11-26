import React, { useEffect } from "react"
import { useState } from "react"

let likedJokes = JSON.parse(localStorage.getItem("likedJokes")) || [];

const Jokes = ({joke, totalLikes, id}) => {

    const [isActive, setIsActive] = useState(likedJokes.includes(id));
    const [likes, setLike] = useState(0 || totalLikes);
    const [classes, setClasses] = useState("");

    const handleLike = (currentId) => {
        setIsActive(current => !current);
        if (isActive) {

            fetch(`https://sarcasticbackend.vercel.app/jokeLikes/${id}`, {
                method: "PATCH",
                headers: {
                    "content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    newLike: totalLikes - 1
                })
            }).then(res => res.json());

            setLike(likes - 1);

            if (likedJokes.length == 1) {
                likedJokes.splice(likedJokes.indexOf(id));
            } else { likedJokes.splice(likedJokes.indexOf(id), likedJokes.indexOf(id)); }
        } else {
            setLike(likes + 1);

            likedJokes.push(id)

            fetch(`https://sarcasticbackend.vercel.app/jokeLikes/${id}`, {
                method: "PATCH",
                headers: {
                    "content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    newLike: totalLikes + 1
                })
            }).then(res => res.json())
        }
    }
    useEffect(() => {
        localStorage.setItem("likedJokes", JSON.stringify(likedJokes));
    }, [likes])
    return (
        <>
            <div class="container px-6 mx-auto maxWidth">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto  text-left border-b-2 pt-5 pb-1 ">
                    <p class="leading-relaxed text-base font-medium quoteTxt">
                        {joke}
                    </p>

                    <div className="heart-btn">
                        <div className="content flex justify-center item-center w-[60px] mt-[10px]">
                        <span onClick={handleLike} className={isActive ? "heart heart-active" : "heart"}></span>
                            <span className={isActive ? "numb heart-active" : "numb"}>{likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jokes