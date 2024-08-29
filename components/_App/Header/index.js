import Link from "next/link";
import React, { useState } from "react";
import { Menu, ChevronDown } from 'react-feather';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [serviceShow, setServiceShow] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  const handleServicesOpen = () => {
    setServicesOpen((prevState) => !prevState)
  }
  const handleDrawerClose = () => {
    setIsOpen(false)
  }
  const handleServiceShow = () => {
    setServiceShow(!serviceShow)
  }

  return (

    <div className="navbar-area">
      <div className="techmax-responsive-nav index-navber-responsive">
        <div className="container">
          <div className="techmax-responsive-menu">
            <div className="logo">
              <Link href="/">
                <img
                  src="assets/img/logo/Krologix logo.svg"
                  className="white-logo"
                  alt="logo"
                />
                <img
                  src="assets/img/logo/Krologix logo.svg"
                  className="black-logo"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="menu-icon">
              <Menu onClick={toggleDrawer} />
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                className='Drawer'
              >
                <div>

                  <ul className="navbar-nav">
                    <li className="nav-item" onClick={handleDrawerClose}>
                      <Link href="/" className="nav-link ">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item" onClick={handleDrawerClose}>
                      <Link href="/about" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item " >
                      <div className="drawer-services">
                        <Link href="/company-services" className="nav-link" onClick={handleDrawerClose}>
                          Services
                        </Link>
                        <ChevronDown size={20} onClick={handleServicesOpen} className="m-r" />
                      </div>
                      {servicesOpen ? <>
                        <ul className="navbar-nav">
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/application-development" className="nav-link">
                              Application development
                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/ecommerce" className="nav-link">
                              E-Commerce
                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/cloud" className="nav-link">
                              Cloud
                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/artificial-intelligence" className="nav-link">
                              Artificial Intelligence
                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/data-center-solutions" className="nav-link">
                              Data Center Solutions
                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/crm" className="nav-link">
                              CRM

                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/cyber-security" className="nav-link">
                              Cyber Security

                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/staff-augmentation" className="nav-link">
                              Staff Augmentation

                            </Link>
                          </li>
                          <li className="nav-item f-s" onClick={handleDrawerClose}>
                            <Link href="/agile" className="nav-link">
                              Agile

                            </Link>
                          </li>
                        </ul>
                      </> : <></>}
                    </li>
                    {/* <li className="nav-item" onClick={handleDrawerClose}>
                      <Link href="/blog" className="nav-link">
                        Blog
                      </Link>

                    </li> */}
                    <li className="nav-item" onClick={handleDrawerClose}>
                      <Link href="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>

                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
      <div className="techmax-nav index-navber">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/">
              {/* <h2>NGL Solar</h2> */}
              <img
                src="assets/img/logo/logo-no-background.png"
                className="white-logo img-logo"
                alt="logo"
              />
              <img
                src="assets/img/logo/logo-no-background.png"
                className="black-logo img-logo"
                alt="logo"
              />
              <svg className="h-1"></svg>
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link ">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/company-services" className="nav-link">
                    Services <ChevronDown size={20} />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/groundMount" className="nav-link">
                        Ground-Mounted Solar Power Plant
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/rooftopGrid" className="nav-link">
                        Rooftop Grid-Connected Solar Power Plant
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/cloud" className="nav-link">
                        Off-Grid Solar Power Plant
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/artificial-intelligence" className="nav-link">
                        Hybrid Solar Power Plant
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <Link href="/blog" className="nav-link">
                    Blog
                  </Link>

                </li> */}
                <li className="nav-item">
                  <Link href="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/capturingmoment" className="nav-link">
                    Capturing Moments
                  </Link>
                </li>
              </ul>
              <div className="other-option">
                <Link className="default-btn" href="/contact">
                  Contact Us <span />
                </Link>
              </div>


            </div>
          </nav>
        </div>
      </div>
    </div>

  )
}
