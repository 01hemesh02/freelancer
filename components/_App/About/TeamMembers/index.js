import Link from "next/link";

const TeamMembers = () => {
    return (
        <section className="team-area section-padding pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <span>Meet The Team</span>
                            <h2> Team Member</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team-box">
                            <div className="team-image">
                                <img src="assets/img/home/team/team-1.jpg" alt="team" />
                                <div className="team-social-icon">
                                    <Link href="#" className="social-color-1">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link href="#" className="social-color-2">
                                        <i className="fab fa-twitter" />

                                    </Link>
                                    <Link href="#" className="social-color-3">
                                        <i className="fab fa-linkedin" />
                                    </Link>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>Lewis Lucas</h3>
                                <span>IT Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team-box">
                            <div className="team-image">
                                <img src="assets/img/home/team/team-2.jpg" alt="team" />
                                <div className="team-social-icon">
                                    <Link href="#" className="social-color-1">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link href="#" className="social-color-2">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link href="#" className="social-color-3">
                                        <i className="fab fa-linkedin" />
                                    </Link>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>Arturo Fuller</h3>
                                <span>Service Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team-box">
                            <div className="team-image">
                                <img src="assets/img/home/team/team-3.jpg" alt="team" />
                                <div className="team-social-icon">
                                    <Link href="#" className="social-color-1">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link href="#" className="social-color-2">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link href="#" className="social-color-3">
                                        <i className="fab fa-linkedin" />
                                    </Link>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>Velma Cain</h3>
                                <span>Managing Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-team-box">
                            <div className="team-image">
                                <img src="assets/img/home/team/team-4.jpg" alt="team" />
                                <div className="team-social-icon">
                                    <Link href="#" className="social-color-1">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link href="#" className="social-color-2">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link href="#" className="social-color-3">
                                        <i className="fab fa-linkedin" />
                                    </Link>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>Marc Gibbs</h3>
                                <span>Executive Assistant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default TeamMembers;