import { Box, TextField, Button } from '@mui/material';
import React from 'react';



const Contact = () => {
    return (
        <>
            <main className="pt-[70px]">
                <section>
                    <div className="flex flex-col items-center justify-around">
                        <h1 classname=" text-[25px]">Need to get in touch?</h1>
                        <p> Hello friends to contact me and this blog please leave your name, email address, subject and message below.</p>
                        <div className=" mt-10 ">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { 
                                        m: 1, 
                                        width: '40ch', 
                                        borderRadius: '5px',
                                        bgcolor: 'white',
                                        ":hover": { bgcolor: 'transparent' } },
                                    "Button": {
                                        m: 1,
                                        width: "100px",
                                        color: '#6ba298',
                                        bgcolor: 'white',
                                        ":hover": { bgcolor: 'black'}
                                    },
                                    background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
                                    padding: '1.5ch',
                                    borderRadius: '10px',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div className=" flex flex-col items-start">
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Your name"
                                        defaultValue=""
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Your email"
                                        defaultValue=""
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Subject"
                                        defaultValue=""
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Your message (optional)"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                    />
                                    <Button
                                        sx={{


                                        }}
                                    >Submit</Button>
                                </div>
                            </Box>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Contact