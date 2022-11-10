import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from "react-router-dom"
import "./styles.css"

const Home = () => {
    return (
        <>
            <main className="pt-[70px]">
                <section className=" flex md:flex-row flex-col items-center justify-center">
                    <div className="frst flex items-center justify-center">
                        <div>
                            <div className="txtGrp">
                                <h2 className="subTitle">Blogger. Copywriter. Memer.</h2>
                                <h1 className="tiTle">Sarcastic Cowboy.</h1>
                            </div>
                            <div className="btnGrp flex flex-col items-start">
                                <NavLink to="/about"><button>Know More</button></NavLink> 
                                <div className="social flex gap-3">
                                    <FacebookIcon fontSize="large" />
                                    <TwitterIcon fontSize="large" />
                                    <a href="https://www.instagram.com/sarcasticcowboy/">
                                        <InstagramIcon fontSize="large" />
                                    </a>
                                    
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