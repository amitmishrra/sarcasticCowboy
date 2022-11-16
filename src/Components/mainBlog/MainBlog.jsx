import React, { useEffect } from 'react'
import OtherBlogs from "../../Components/OtherBlogs/Index"
export default function MainBlog() {
    const data = [{
        heading: "This is our heading",
        paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
        imgURL: "assets/puppy.jpg"
    },
    {
        heading: "This is our heading",
        paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
        imgURL: "assets/puppy.jpg"
    },
    {
        heading: "This is our heading",
        paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
        imgURL: "assets/puppy.jpg"
    },
    {
        heading: "This is our heading",
        paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
        imgURL: "assets/puppy.jpg"
    },
    {
        heading: "This is our heading",
        paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
        imgURL: "assets/puppy.jpg"
    }
    ]


   
       const  fetchData = async()=>{
        await fetch("https://unescowhsindia-api.herokuapp.com/api").then(resp=>resp.json()).then(resp=> console.log(resp))

       }

       fetchData();


    return (
        <div className="mainBlog flex lg:flex-row w-[100%]  pt-[100px]">
            <div className="lefside lg:w-[80vw] ">
                <div className="heading headingFont font-[40px]">
                    3 Ds of My Life That Changed My Life Forever

                </div>
                <div className="subHeading">
                    Life has its own way of teaching, you just need to be good at picking those subtle hints
                </div>
                <div className="img">
                    <img src="assets/puppy.jpg" alt="" />
                </div>

                <div className="paragraph">
                    <p>
                    After waiting for 40 minutes, outside the cyber cafe, finally came my turn, I entered my roll number on the computer screen and waited anxiously for the result to load, the marks sheet was out. I had managed to complete my engineering with the first grade, there was a deep sigh of relief.
                    </p>

                   <p>
                   I stepped out to see some other friends outside the cafe, they all were cheerful and jumping with joy but to my surprise, I was not as happy and excited, the reason was I didn’t have any offer letter, few Tier-3 companies came in the last semester (as my college wasn’t the most reputed one in the city ) during campus placement but I was not fortunate or intelligent enough to crack those interviews.

                   </p>
                   
                   <p>
                   Now the only option left was to move to some metro city and try for off-campus selection, I moved city to city, spent months, attending off-campus interviews, in a few, I was lucky to get rejected in the first round, in others I was unfortunate to make till the last round but due to some unforeseen reasons, companies were shy to hand me the employment letter.
                   </p>

                   <p>
                   From 3 months, it became 9 months since graduation (9 months is a good time a woman can deliver a baby in that)and still, I was not having any job in hand. Asking money from parents with each passing month felt more embarrassing.

                   </p>
                   <p>
                   I was totally depressed, devastated, and defeated. Wearing the burden of these 3 Ds on my head, I found it heavy to lift myself up, and that too against notorious gravity which exists only to bring anything down. Reading motivational books like “You can win” — by Shiv Khera, watching videos of “Sandeep Maheshwari” on YouTube was not helping me either.
                   </p>

                    <p>
                    Tried waking up early in the morning (as per brown parents it can solve many of your problems) but by afternoon I was again feeling sleepy and tired. In a nutshell, nothing seemed to be working for me.

                    </p>

                </div>
            </div>

            <div className="reightSide  lg:w-[10vw]]">
                {/* {
                    data.map((item) => {
                        return (
                            <OtherBlogs
                                heading={item.heading}
                                paragraph={item.paragraph}
                                imgURL={item.imgURL}
                            />
                        )
                    })
                } */}
            </div>
        </div>
    )
}
