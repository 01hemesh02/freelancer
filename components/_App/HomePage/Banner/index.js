import Link from "next/link";


const HomeArea = () => {
    return (
        <div className="home-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="main-banner-content">
                                    <h1>
                                        NGL Solar &nbsp;
                                        <span className="color-text">Private Limited</span>

                                    </h1>
                                    <p className="text-align-justify">
                                        "Experience the benefits of renewable energy with our high-efficiency solar panels and expert installation services. Save on energy costs while reducing your carbon footprint. Let’s harness the power of the sun together
                                    </p>
                                    <div className="banner-btn">
                                        {/* <Link href="/about" className="default-btn-one">
                                            Learn More
                                            <span />
                                        </Link> */}
                                        <Link className="default-btn" href="/about">
                                            Know More
                                            <span />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-image">
                                    <img src="assets/img/home/istockphoto-1405880267-1024x1024 (1).webp" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grey-cr" />
        </div>
    );
}

export default HomeArea;