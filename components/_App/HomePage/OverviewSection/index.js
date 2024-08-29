const OverviewSection = () => {
    return (
        <section className="overview-section bg-grey section-padding">
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="section-title">
                            {/* <span>WHY CHOSE US </span> */}
                            <h2>WHY CHOOSE US</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="overview-content">
                            <h2>Quality</h2>
                            <p className="text-align-justify">
                                We use the best & high performing components and ensure quality deliverables with 100% customer satisfaction.
                            </p>
                        </div>
                        <div className="overview-content">
                            <h2>Innovative</h2>
                            <p className="text-align-justify">
                                We are innovative and highly adaptable to new technologies to give a high performance, optimized and efficient renewable energy solutions.
                            </p>
                        </div>
                        <div className="overview-content">
                            <h2>Experienced Team</h2>
                            <p className="text-align-justify">
                                With our experienced team and regular communication with customers we strive to leverage our technical expertise and industry know-how to develop turnkey, efficient and cost effective solutions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="overview-image-2">
                            <img src="assets/img/home/Untitled design (18).png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default OverviewSection;
