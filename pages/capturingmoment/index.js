import Link from "next/link";
import { CAPUTRING_MOMENTS } from "../../services/const"

const CapturingMoments = () => {
    return (
        <>
            <div className="page-title-area item-bg3">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Capturing Moments</h2>
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

                        {CAPUTRING_MOMENTS.map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="blog-item">
                                        <div className="blog-image">
                                            <Link href="single-blog.html">
                                                <img src={item.img} alt="image" />
                                            </Link>
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

export default CapturingMoments;