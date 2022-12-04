import "./Style.css"
import { NavLink } from "react-router-dom"

const LatestBlog = ({ Title, heading, paragraph, imgURL }) => {
    return (
        <>
            <NavLink to={Title} className=" w-max m-10">
                <section className="containers box-border flex flex-col md:flex-row items-center justify-between h-[50vh] w-[100vw] md:w-[85vw] md:h-[60vh] rounded-lg bg-gray-200  borderShadow">
                    <img src={imgURL} className=" object-cover w-full md:w-[50%] h-3/5 md:h-full rounded" alt="" />
                    <div className=" w-full md:w-[50%] h-2/5 md:h-full p-5 flex flex-col gap-2 justify-around">
                        <h2 className=" text-gray-600 m-0 ">EDITOR'S PICK</h2>
                        <h1 className=" font-semibold text-xl">
                            {heading}
                        </h1>
                        <p className="xtraTxt text-justify hidden md:block">
                            {paragraph.slice(0, 600)}
                        </p>
                        <button className="readbtn w-max">
                            Read more
                        </button>
                    </div>
                </section>
            </NavLink>
        </>
    )
}

export default LatestBlog