import { NavLink } from "react-router-dom"
import "./style.css"

const Home = () => {
    return (
        <>
            <main className="pt-[70px]">
                <section className=" flex md:flex-row flex-col items-center justify-center">
                    <div className="frst flex items-center justify-center">
                        <div>
                            <div className="txtGrp">
                                <h2>Blogger. Copywriter. Memer.</h2>
                                <h1>Sarcastic Cowboy</h1>
                            </div>
                            <div className="btnGrp flex flex-col items-center md:items-start">
                                <NavLink to="/about"><button>Know More</button></NavLink> 
                                <div className="social">
                                    <i>f</i>
                                    <i>t</i>
                                    <i>i</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scnd relative flex items-center justify-center">
                        <img src="assets/home1.jpg" className="img1" alt="" />
                        <img src="assets/home2.jpg" className="img2 absolute" alt="" />
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home