import Link from "next/link";

const Footer = () => {
  return (

    <>
      <section className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>
                <p>
                  At Krologix, we're your technology enablers, specializing in mobile and website development, data centers, staff augmentation, social networking, ERP systems, and e-commerce. Our focus is on innovative solutions tailored to your goals, ensuring your business thrives in the digital landscape.
                </p>
                <ul className="footer-social">
                  <li>
                    <Link href="https://www.facebook.com/KrologixTechnologies/" target="\blank">
                      {" "}
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/krologix/" target="blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/krologix-technologies-4099011b5/" target="blank">
                      {" "}
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/krologix" target="\blank">
                      {" "}
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Our Services</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    {" "}
                    <Link href="/artificial-intelligence">Artificial Intelligence</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/application-development">Application Development</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/cloud">Cloud</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/crm">CRM</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/cyber-security">Cyber Security</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/ecommerce">E-commerce</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/agile">Agile</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/company-services">Services</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    {/* <Link href="terms-condition.html">Terms &amp; Conditions</Link> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact Information</h3>
                </div>
                <div className="footer-info-contact">
                  <span>
                    <strong>Landline:</strong>{" "}
                    <span>  011-45035625 </span>
                  </span>
                  <br />
                  <span>
                    <strong>Phone:</strong>{" "}
                    <span> +91 99536 63272 ,&nbsp; +91 96501 02104  </span>
                  </span>
                </div>
                <div className="footer-info-contact">
                  <span>
                    <strong>Email:</strong>{" "}
                    {/* <Link>support@krologix.com</Link> */}
                  </span>
                </div>
                <div className="footer-info-contact">
                  <span>
                    <strong>Address:</strong> Krologix Technologies Pvt. Ltd.
                    303, Surya Complex, 21 Veer Savarkar Block, Shakarpur, Delhi- 110092
                  </span>
                </div>
                {/* Start Subscribe Area */}
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required=""
                    autoComplete="off"
                  />
                  <button className="default-btn" type="submit">
                    Subscribe <span />
                  </button>
                </form>
                {/* End Subscribe Area */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <p>
                {" "}
                <i className="far fa-copyright" /> Krologix - All Rights Reserved. &nbsp;  Developed By -  {""}
                <Link href="https://www.raysteedsinfotech.com/" target="\blank">
                  Raysteeds Infotech Private Limited
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Footer;