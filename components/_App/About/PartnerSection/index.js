import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const settings = {
    dots: false,
    infinite: false,
    speed: 3000,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
        {
            breakpoint: 2560,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
};

const PartnerSection = () => {
    return (
        <section className="partner-section pt-50 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2> Technologies Used</h2>
                </div>
                <div className="partner-list">
                    <Slider{...settings}>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/mongo-db.svg" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/Webysther_20160423_-_Elephpant.svg.png" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/angular.webp" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/bootstrap.webp" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/images (1).png" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/js.webp" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/mysql.svg" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/react-js.svg" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/download.png" alt="image" className="technologysize" />
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="#0">
                                <img src="assets/img/home/Partner Section/2560px-Node.js_logo.svg.png" alt="image" className="technologysize" />
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>


    );
}
export default PartnerSection;