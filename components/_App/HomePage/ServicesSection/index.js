import { SERVICES } from "../../../../services/const"
import Link from "next/link";

const ServicesSection = () => {
    return (

        <section className="services-section pt-70 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <span>WHAT WE DO </span>
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    {SERVICES.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6" key={index} >
                                <Link href={item.path}>
                                    <div className="single-services-item">
                                        <div className="services-icon">
                                            <i className={item.className} />

                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.content}
                                        </p>
                                    </div>
                                </Link>
                            </div>)
                    })}
                </div>
            </div>
        </section>


    );
}

export default ServicesSection;