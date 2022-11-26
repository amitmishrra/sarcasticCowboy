import "./style.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { color } from "@mui/system";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [snack, setSnack] = useState("");
    const [btnActive, setBtnActive] = useState(true);


    let messageData = {
        from_name: name,
        mail: email,
        message: message
    }

    const handleClick = () => {
        if (name.length < 1) {
            setSnack("please enter name");
            setOpen(true);
            setBtnActive(true);
        }
        else if (name.length <= 3) {
            setSnack("name too short");
            setOpen(true);
            setBtnActive(true);
        }
        else if (email.length < 1) {
            setSnack("please enter email");
            setOpen(true);
            setBtnActive(true);
        }
        else if (!email.includes("@" && ".")) {
            setSnack("email must contain @ and .");
            setOpen(true);
            setBtnActive(true);
        }
        else if (message.length < 1) {
            setSnack("please enter message");
            setOpen(true);
            setBtnActive(true);
        }
        else {
            setOpen(false);
            setBtnActive(false);
            btnActive? sendMessage() : console.log("already sent");
            // sendMessage();
        }
    }

    const sendMessage = () => {
        emailjs.send('service_mhsuc6g', 'template_5eghhze', messageData, '7JPlkoF3xDWkv7XjM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className="contactpage flex flex-col lg:flex-row justify-center  h-screen items-center">
                <div className="left-side lg:w-1/2 flex flex-col justify-between mb-4 lg:mb-0 m-auto text-center lg:mt-[120px]">
                    <div className="contactText w-[75%] m-auto">
                        <div className="heading headingFont text-[30px]">
                            Need to get in touch?
                        </div>
                        <div className="para">
                            Hello friends to contact me and this blog please leave your name, email address and message below.
                        </div>
                    </div>

                    <div className="contactBox lg:w-[75%] w-[95%] flex flex-col justify-around m-auto h-[55vh] mt-[30px] pb-[20px]">
                        <div className="imputField flex flex-col justify-around h-[80%]">
                            <input
                                // required
                                type="text"
                                className="input"
                                placeholder="Full Name"
                                onChange={e => {
                                    setName(e.target.value)
                                    setBtnActive(true)
                                }}
                            />
                            <input
                                type="mail"
                                className="input"
                                placeholder="Email"
                                onChange={e => {
                                    setMail(e.target.value)
                                    setBtnActive(true)
                                }}
                            />
                            <textarea
                                type="text"
                                className="input message"
                                placeholder="Your Message"
                                onChange={e => {
                                    setMessage(e.target.value)
                                    setBtnActive(true)
                                }}
                            />
                        </div>
                        <div className="SendButton flex justify-end items-center w-[80%]">
                            <button onClick={handleClick}
                                style={{ 'color': `${btnActive ? "" : "white"}`, 'backgroundColor': `${btnActive ? "" : "black"}` }}
                                className="KNowButton">{btnActive ? "Send" : "Sent"}</button>
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
                    </div>
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    // onClose={handleClose}
                    message={snack}
                // action={action}
                />
            </div>
        </>
    )
}
export default Contact