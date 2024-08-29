import dynamic from 'next/dynamic'
// import emailjs from "@emailjs/browser";
import { EMAIL_SERVICE_ID, EMAIL_PUBLIC_KEY, EMAIL_TEMPLATE_ID } from "../../services/const"
import { useState, useRef } from "react";
const Breadcrumb = dynamic(() => import('@/components/_App/TitleBanner'))
import { CONTACT_US } from "@/services/pageInfo"


const Contact = () => {

    // const [error, setError] = useState();
    // const [success, setSuccess] = useState();
    // const [isSubmitted, setIsSubmitted] = useState(false)
    // const form = useRef();
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setIsSubmitted(true);
    //     emailjs
    //         .sendForm(
    //             EMAIL_SERVICE_ID,
    //             EMAIL_TEMPLATE_ID,
    //             form.current,
    //             EMAIL_PUBLIC_KEY
    //         )
    //         .then(() => {
    //             setSuccess("Thank you for connecting us. we will get back to you soon .");
    //             form.current.reset();
    //         })
    //         .catch((error) => {
    //             setError(error.text);
    //         });
    // };


    return (
        <>
            <Breadcrumb data={CONTACT_US} />
            <div className="contact-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-information-box-3">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="single-contact-info-box">
                                            <div className="contact-info">
                                                <h6>Address:</h6>
                                                <p>Krologix Technologies Pvt. Ltd.</p>
                                                <p>303, Surya Complex, 21 Veer Savarkar Block, Shakarpur,
                                                    Delhi- 110092
                                                </p>

                                            </div>
                                            <div className="contact-info-bg-icon">
                                                <i className="pe-7s-map-marker" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="single-contact-info-box">
                                            <div className="contact-info">
                                                <h6>Phone:</h6>
                                                <p>+91 99536 63272</p>
                                                <p>+91 96501 02104</p>
                                            </div>
                                            <div className="contact-info-bg-icon">
                                                <i className="pe-7s-call" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="single-contact-info-box">
                                            <div className="contact-info">
                                                <h6>Email:</h6>
                                                <p>support@krologix.com</p>
                                            </div>
                                            <div className="contact-info-bg-icon">
                                                <i className="pe-7s-mail" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="contact-form contact-form-3">
                                <p className="form-message" />
                                <form
                                    id="contact-form"
                                    className="form"
                                // ref={form} onSubmit={handleClick}
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    required=""
                                                    placeholder="Your Name"
                                                />{" "}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    required=""
                                                    placeholder="Your Email"
                                                />{" "}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    name="phone"
                                                    id="phone"
                                                    required=""
                                                    className="form-control"
                                                    placeholder="Your Phone"
                                                />{" "}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    className="form-control"
                                                    required=""
                                                    placeholder="Your Subject"
                                                />{" "}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    cols={30}
                                                    rows={6}
                                                    required=""
                                                    placeholder="Your Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="default-btn">
                                                Send Message <span />
                                            </button>
                                        </div>
                                        {/* {isSubmitted ?
                                            <p>
                                                {success}
                                                {error}
                                            </p> : null
                                        } */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>



        </>
    );
}

export default Contact;