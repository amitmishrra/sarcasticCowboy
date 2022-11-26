import { NavLink } from "react-router-dom"
import "./Style.css"

const OtherBlogs = ({ Title, heading, paragraph, imgURL }) => {
    return (
        <>
            <NavLink to={Title}>
                <div className="container flex items-center p-3  w-[80vw] md:w-[35vw] md:h-[15rem] rounded-2xl bg-gray-200 borderShadow">
                    <img src={imgURL} className=" object-cover h-[9rem] w-[40%] md:h-full rounded" alt="" />
                    <div className=" w-[60%] h-full pl-3 flex flex-col items-start justify-between">
                        <h1 className="text-lg lg:hidden md:text-2xl font-semibold">
                            {heading.slice(0, 52)}
                            <p className="lg:hidden">...</p>
                        </h1>
                        <h1 className="hidden lg:block text-lg md:text-2xl font-semibold">
                            {heading.slice(0, 80)}
                            <p className="lg:hidden">...</p>
                        </h1>
                        <p className="hidden lg:block">
                            {paragraph.slice(0, 65)}
                        </p>
                        <button className="readbtn">
                            Read more
                        </button>
                    </div>
                    {/* <div className="img h-[200px] w-[200px] md:h-[300px] md:w-[400px] rounded-xl"></div> */}
                </div>
            </NavLink>
        </>
    )
}

export default OtherBlogs