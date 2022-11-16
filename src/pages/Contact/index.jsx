import "./style.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <>
            <div className="contactpage flex flex-col lg:flex-row justify-center  h-screen items-center">
                <div className="left-side lg:w-1/2 flex flex-col justify-between mb-4 lg:mb-0 m-auto text-center lg:mt-[120px]">
                    <div className="contactText w-[75%] m-auto">
                        <div className="heading headingFont text-[30px]">
                            Need to get in touch?
                        </div>
                        <div className="para">
                            Hello friends to contact me and this blog please leave your name, email address, subject and message below.
                        </div>
                    </div>

                    <div className="contactBox lg:w-[75%] w-[95%] flex flex-col justify-around m-auto h-[55vh] mt-[30px] pb-[20px]">
                        <div className="imputField flex flex-col justify-around h-[80%]">
                            <input type="text" className="input" placeholder="Full Name" />
                            <input type="mail" className="input" placeholder="Email" />
                            <textarea type="text" className="input message" placeholder="Your Message" />
                        </div>
                        <div className="SendButton flex justify-end items-center w-[80%]">
                            <button className="KNowButton">Send</button>
                        </div>
                    </div>
                </div>

                <div className="right-side lg:w-1/2 flex flex-col lg:flex-row justify-center items-center pb-4">
                <div className="social lg:gap-5 gap-8  lg:flex">
                                    <a target={"_blank"} href="https://www.facebook.com/SarcasticCowboy/">
                                        <FacebookIcon className='socialMedia' fontSize="large" />
                                    </a>
                                    <a target={"_blank"} href="https://twitter.com/SarcasticCowboy?t=cWfGGLY0dvPcJXmzEo65zQ&s=09">
                                        <TwitterIcon className='socialMedia' fontSize="large" />
                                    </a>
                                    <a target={"_blank"} href="https://www.instagram.com/sarcasticcowboy/">
                                        <InstagramIcon className='socialMedia' fontSize="large" />
                                    </a>
                                    <LinkedInIcon className='socialMedia' fontSize="large" />


                                </div>
                </div>
            </div>
        </>
    )
}
export default Contact