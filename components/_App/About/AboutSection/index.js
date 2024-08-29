const AboutArea = () => {
    return (
        <section className="about-area pt-70 pb-100">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="about-content">
                            <div className="about-content-text">
                                <h2>
                                    <span className="color-text">Our mission</span> is to make your
                                    business better through technology.
                                </h2>
                                <p>
                                    At Krologix, we're dedicated to propelling your business forward as your trusted innovation partner and technology enabler. With a diverse spectrum of services spanning mobile and website development, data center solutions, staff augmentation, social networking, ERP systems, and e-commerce, we bring expertise and creativity to the forefront of your operations. Our commitment lies in aligning our services with your unique goals, ensuring that your journey with Krologix is one of seamless innovation and technological empowerment.
                                </p>
                                <div className="skills">
                                    <div className="skill-item">
                                        <h6>
                                            Web Development <em>95%</em>
                                        </h6>
                                        <div className="skill-progress">
                                            <div className="progres80" data-value="90%" />
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <h6>
                                            Mobile Development <em>90%</em>
                                        </h6>
                                        <div className="skill-progress">
                                            <div className="progres75" data-value="75%" />
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <h6>
                                            Discovery &amp; Strategy <em>80%</em>
                                        </h6>
                                        <div className="skill-progress">
                                            <div className="progres70" data-value="80%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="about-image">
                            {/* <img src="assets/img/banner/Untitled design (35).jpg" alt="About image" /> */}
                            <img src="assets/img/bhaiji.jpg" alt="About image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default AboutArea;