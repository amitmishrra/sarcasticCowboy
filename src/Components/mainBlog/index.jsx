import React from "react"
import './style.css'

const MainBlog = () => {
    const data = [{
        TitleMain: "3 Ds of My Life That Changed My Life Forever.",
        imgUrl: "assets/puppy.jpg",
        introText: "Life has its own way of teaching,",
        introText2: "you just need to be good at picking those subtle hints.",
        subtitle: "Subtitle",
        subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia excepturi expedita.",
        subtitle2: "Subtitle2",
        subtext2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia excepturi expedita.",
        main: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium vero consequatur repellendus inventore similique, mollitia harum quam itaque quod incidunt voluptatibus, porro, consequuntur neque? Non esse nulla voluptate! Architecto at sit repellat iure rem adipisci repudiandae consequuntur? Itaque aliquid consectetur excepturi, quibusdam error quasi ipsam quis incidunt veritatis sequi fugit ex expedita similique earum iure labore facilis fugiat rerum tempore? Esse ullam adipisci, a numquam atque facilis itaque aperiam? Exercitationem necessitatibus, eaque corporis animi voluptate illum velit aperiam quos iusto ipsa impedit provident perspiciatis voluptatum nisi esse tenetur veniam obcaecati corrupti. Recusandae ipsam ad rem iste quibusdam fugit dignissimos error mollitia laudantium. Asperiores sapiente doloremque atque corporis dolorum? Facilis, minus! Facilis totam iusto nostrum ut saepe soluta quos fugit, molestiae dolore id quibusdam repudiandae obcaecati eius, itaque officia libero, quas ducimus nam possimus laudantium commodi. Amet dolor placeat ipsam nobis eos necessitatibus iste ex. Recusandae earum asperiores ratione, tempore et neque, cum ipsum maxime sunt est eaque, fugit suscipit! Nemo porro maxime repellendus, obcaecati voluptate nisi sequi incidunt, ipsam ad, laborum beatae deserunt quisquam provident rerum! Perferendis provident corporis voluptate recusandae omnis distinctio veritatis doloremque nihil voluptas nobis dolor consequuntur sit, sunt quos facere aut incidunt aliquid in vitae eligendi? Nisi ex repellat totam neque perspiciatis velit repudiandae laborum recusandae eligendi obcaecati quisquam repellendus, similique suscipit ab, ipsum quod dolor commodi itaque saepe consequuntur optio, iure sit sequi magni? Non, temporibus quod! Ad veritatis nihil velit quia adipisci corrupti, ab tenetur laborum molestiae odio? Eum porro facilis iusto tenetur voluptatum sit nisi, perferendis ea corporis quisquam reiciendis non sed id ratione beatae ipsa quam natus autem cum. Repellendus, perspiciatis! Commodi ducimus quod assumenda illo officiis ad explicabo magni? Incidunt consequatur fugit quia expedita neque pariatur temporibus placeat omnis in quasi? Error iure deserunt consectetur, optio accusantium, quia itaque voluptatum placeat porro repellendus, neque minima. Quam animi eveniet suscipit dolores alias dolor ea obcaecati amet! Sapiente voluptatem molestias ea odio rerum. Rem blanditiis veritatis sit, molestias tenetur laborum, harum vero fugit quidem atque molestiae sint assumenda illo deleniti, obcaecati veniam voluptatem enim numquam. Earum inventore voluptatibus vel blanditiis, numquam dolore nostrum cupiditate unde dolorum explicabo, veniam debitis itaque, quam rerum quae error vitae in architecto. Earum quod commodi quis, cupiditate, suscipit unde molestiae aspernatur nemo sint voluptatem qui? Vel harum quam beatae quaerat provident reprehenderit ad magni voluptate mollitia? Blanditiis commodi quasi autem obcaecati, iusto vero doloremque dicta magnam eum? "
    }]

    return (
        <>
            <main className=" pt-[75px] md:pt-[100px]">
                <section className="bSec flex flex-col md:items-center justify-center">
                    <div className="Title flex flex-col items-start">
                        <h3 className="TitleMain">
                            {data[0].TitleMain}
                        </h3>
                        <img className="pt-8 " src={data[0].imgUrl} alt="" />
                    </div>
                    <div className="Intro pt-5">
                        <p className="subtext">
                            {data[0].introText}
                            {data[0].introText2}
                        </p>
                    </div>
                    <div className="subHeading flex flex-col items-start">
                        <h3 className="subtitle">
                            {data[0].subtitle}
                        </h3>
                        <p className="subtext">
                            {data[0].subtext}
                        </p>
                    </div>
                    <div className="subHeading flex flex-col items-start">
                        <h3 className="subtitle">
                            {data[0].subtitle2}
                        </h3>
                        <p className="subtext">
                            {data[0].subtext2}
                        </p>
                    </div>
                    <div className="pt-5 ">
                        <p className="main">
                            {data[0].main.slice(0, 500)}
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MainBlog