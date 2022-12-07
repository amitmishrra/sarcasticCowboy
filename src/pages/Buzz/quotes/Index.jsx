import './Style.css'
import { Blogdata } from '../../Blog'
import Miniblog from '../../../Components/miniblog'
import QuotesBuzz from './quote'
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';

const Buzz = () => {
    const [quoteData, setQuoteData] = useState([])

    useEffect(()=>{
        fetch("https://sarcasticbackend.vercel.app/getQuotes").then(res=>res.json()).then(res=>setQuoteData(res.reverse()))
    })
    return (
        <>
            <main className=" pt-[70px] md:pt-[100px] min-h-[100vh] flex flex-col md:flex-row">
                <section class="md:w-[70%]">
                    { 
                    quoteData.length > 0 ? 
                        quoteData.map((item) => {
                            return (
                                <QuotesBuzz
                                    quote={item.quote}  
                                    totalLikes={item.likes}
                                    id={item._id} 
                                />
                            )
                        }): 

                        <div className="flex  justify-center flex-col items-center h-[70vh]">
                           <div className="mb-4 text-[20px]">
                           Loading Quotes...
                           </div>
                            <CircularProgress />
                        </div>
                    }
                  
                </section>
                <section className="rightSec p-10 md:px-5  md:py-[20px] border-t-2 md:border-t-0 md:border-l border-[#cecece] md:sticky md:top-[100px] right-0 md:w-[30%] md:h-[100vh] flex items-start justify-center ">
                    <div className="flex flex-col items-start justify-center">
                        <p className="md:text-2xl mb-5 text-lg font-medium" >
                            More from Sarcastic Cowboy</p>
                        {/* <div className="flex flex-col items-center justify-center "> */}

                        {
                            Blogdata.map((item) => {
                                return (
                                    <Miniblog
                                        Title={item.Title}
                                        heading={item.heading}
                                        paragraph={item.paragraph}
                                        imgURL={item.imgURL}
                                        Date={item.Date}
                                    />
                                )
                            })
                        }
                        {/* </div> */}
                    </div>
                </section>
            </main>
        </>
    )
}

// export { quoteData }
export default Buzz