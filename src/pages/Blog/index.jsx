
import LatestBlog from "../../Components/LatestBlog"
import OtherBlogs from "../../Components/OtherBlogs/Index"
import { ThreeDData } from "../../Articles/ThreeD"
import { DatingData } from "../../Articles/Dating"
import { SaveMoneyData } from "../../Articles/SaveMoney"

const Blogdata = [
    {
        Title: `${ThreeDData.Title}`,
        heading: `${ThreeDData.Heading}`,
        paragraph: `${ThreeDData.parag1}`,
        imgURL: `${ThreeDData.img1}`,
        Date: `${ThreeDData.Date}`
    },
    {
        Title: `${DatingData.Title}`,
        heading: `${DatingData.Heading}`,
        paragraph: `${DatingData.parag1}`,
        imgURL: `${DatingData.img1}`,
        Date: `${DatingData.Date}`
    },
    {
        Title: `${SaveMoneyData.Title}`,
        heading: `${SaveMoneyData.Heading}`,
        paragraph: `${SaveMoneyData.parag1}`,
        imgURL: `${SaveMoneyData.img1}`,
        Date: `${SaveMoneyData.Date}`
    },
    // {
    //     heading: "This is our heading",
    //     paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
    //     imgURL: "assets/puppy.jpg",
    //     Date: "feb 10"
    // },
    // {
    //     heading: "This is our heading",
    //     paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
    //     imgURL: "assets/puppy.jpg",
    //     Date: "feb 10"
    // },
    // {
    //     heading: "This is our heading",
    //     paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
    //     imgURL: "assets/puppy.jpg",
    //     Date: "feb 10"
    // },
    // {
    //     heading: "This is our heading",
    //     paragraph: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae, mollitia numquam dolorem, rerum perferendis atque incidunt iste autem ipsum architecto earum doloremque sit id recusandae ut unde facere! Deserunt quaerat itaque amet animi vel dolorem minus omnis sit maxime voluptate voluptatibus quod saepe necessitatibus eum corporis porro aut tenetur, odit laboriosam? Ipsa, commodi alias consectetur, nostrum assumenda est cum debitis voluptatem a et error asperiores, ducimus atque quasi tenetur possimus nemo eius. Error maxime ipsam corporis repellendus quo culpa fugit, necessitatibus aspernatur a atque ducimus impedit distinctio omnis id delectus, perspiciatis sunt inventore itaque quibusdam! Voluptatum dolore voluptates dolores nemo totam, libero illo sint excepturi eaque nesciunt corrupti optio quam aliquam quae suscipit vitae nisi provident odit sunt ab atque! Laudantium aperiam molestiae dolorum voluptate non vel quis neque id itaque hic animi, suscipit, sapiente nesciunt quae perferendis! Dolorum, alias. Ratione nisi aliquid officia praesentium consequuntur eveniet alias. Autem enim odit unde voluptas, recusandae illum deleniti nostrum iusto quisquam labore quis ducimus explicabo earum ipsam quidem. Magni repellat sapiente aut et itaque reprehenderit minus nisi? Vitae, doloremque reiciendis! Aspernatur, qui ea? Quas beatae in quasi vero. Non, vel, vero tenetur, facere sequi tempore sint architecto minus placeat quidem veniam velit quia distinctio qui modi ullam quae assumenda! Quam obcaecati voluptas maxime corrupti non, ratione libero porro officia accusamus fugiat illo. Aperiam quae quis nostrum debitis fugit. Sequi soluta sapiente alias nihil atque est vel nostrum dicta ad necessitatibus, quisquam dolorum nemo expedita aut, fuga voluptas assumenda? Velit quasi dolor tempore incidunt. At minus rerum nesciunt, doloremque nostrum, nemo assumenda culpa reiciendis, et aliquid esse sunt est molestias quam tempore voluptatum cupiditate distinctio sit animi in veritatis! Voluptas consectetur voluptatem dolore cupiditate fugit reiciendis quae ea laudantium libero alias vitae, cumque modi temporibus saepe id in itaque ad nostrum nisi.",
    //     imgURL: "assets/puppy.jpg",
    //     Date: "feb 10"
    // }
]

const Blog = () => {


    return (
        <>
            <div className="pt-[80px]">
                <div className="latestBlog flex justify-center items-center">
                    <LatestBlog
                        Title={Blogdata[0].Title}
                        heading={Blogdata[0].heading}
                        paragraph={Blogdata[0].paragraph}
                        imgURL={Blogdata[0].imgURL}
                    />
                </div>

                <div className="otherBlogs flex justify-center items-center flex-wrap">
                    {
                        Blogdata.map((item) => {
                            return (
                                <OtherBlogs
                                    Title={item.Title}
                                    heading={item.heading}
                                    paragraph={item.paragraph}
                                    imgURL={item.imgURL}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}
export { Blogdata }
export default Blog