const Jokes = () => {
    return (
        <>
            <div class="container px-6 mx-auto maxWidth">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto  text-left border-b-2 pt-5 pb-1 ">
                    <p class="leading-relaxed text-base font-medium quoteTxt">
                        {/* {quote} */}
                    </p>

                    <div className="heart-btn">
                        <div className="content flex justify-center item-center w-[60px] mt-[10px]">
                            <span className= "heart"></span>
                            <span className="numb">12</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jokes