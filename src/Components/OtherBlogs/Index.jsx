import "./Style.css"

const OtherBlogs = ({heading, paragraph, imgURL}) => {
    return (
        <>
            <div className="container flex items-center p-3 m-5  w-[90vw] md:w-[40vw] rounded-2xl bg-gray-200 borderShadow">
                <img src={imgURL} className=" object-cover w-[100px] h-[100px] md:w-[50%] md:h-full rounded" alt="" />
                <div className=" w-full p-3 rounded-b-2xl">
                    <h1 className="text-lg md:text-2xl font-semibold mb-3">{heading}</h1>
                    <p>{paragraph.slice(0,100)}</p>
                    <button>
                        <a href="#">Read more</a>
                    </button>
                </div>
                {/* <div className="img h-[200px] w-[200px] md:h-[300px] md:w-[400px] rounded-xl"></div> */}
            </div>
        </>
    )
}

export default OtherBlogs