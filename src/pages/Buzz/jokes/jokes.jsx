import React, { useEffect } from "react"
import { useState } from "react"

let likedJokes = JSON.parse(localStorage.getItem("likedJokes")) || [];

const Jokes = ({ path, totalLikes, id }) => {

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
            <div className="image w-[95%] md:w-[320px] h-[380px] md:h-[350px] flex flex-col justify-around items-center rounded-[10px] m-auto my-5 md:m-5 borderShadow">
                <img className="md:max-w-[600px] w-[95%] md:w-[300px] border rounded-[10px] imageShadow"
                    src={path} alt="" />

                <div className="heart-btn flex justify-start w-[100%] ml-8">
                    <div className={isActive ? "content heart-active flex justify-center item-center" : "content flex justify-center item-center"}>
                        <span onClick={handleLike} className={isActive ? "heart heart-active" : "heart"}></span>
                        <span className={isActive ? "numb heart-active ml-[15px]" : "numb ml-[15px]"}>{likes}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jokes