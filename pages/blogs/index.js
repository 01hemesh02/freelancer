import Link from "next/link";
import { BLOGS } from "../../services/const"

const Blogs = () => {
    return (
        <>
            <div className="page-title-area item-bg3">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Blogs</h2>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-section section-padding">
                <div className="container">
                    <div className="row">

                        {BLOGS.map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="blog-item">
                                        <div className="blog-image">
                                            <Link href="single-blog.html">
                                                <img src={item.img} alt="image" />
                                            </Link>
                                        </div>
                                        <div class="single-blog-item">
                                            <div class="blog-content">
                                                <h3>
                                                    <Link href="single-blog.html">
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                                <p>{item.description}</p>
                                                <div class="blog-btn"><Link href="single-blog.html" class="default-btn blog-btn-one">Continue Reading <span></span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Blogs;