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
                    {/* <div class="container px-5 py-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo rem ducimus exercitationem commodi! Debitis enim mollitia id laudantium molestiae, voluptas tempora, dolor recusandae dolores libero obcaecati neque suscipit explicabo adipisci, quam iure deleniti et omnis architecto blanditiis soluta reprehenderit quasi. Ab, neque qui accusantium reiciendis assumenda sint quisquam voluptas rerum.</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p class="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div> */}
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