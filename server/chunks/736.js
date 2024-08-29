exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 1660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
// EXTERNAL MODULE: external "react-modern-drawer"
var external_react_modern_drawer_ = __webpack_require__(4108);
var external_react_modern_drawer_default = /*#__PURE__*/__webpack_require__.n(external_react_modern_drawer_);
// EXTERNAL MODULE: ./node_modules/react-modern-drawer/dist/index.css
var dist = __webpack_require__(9695);
;// CONCATENATED MODULE: ./components/_App/Header/index.js






function Header() {
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [servicesOpen, setServicesOpen] = (0,external_react_.useState)(false);
    const [serviceShow, setServiceShow] = (0,external_react_.useState)(false);
    const toggleDrawer = ()=>{
        setIsOpen((prevState)=>!prevState);
    };
    const handleServicesOpen = ()=>{
        setServicesOpen((prevState)=>!prevState);
    };
    const handleDrawerClose = ()=>{
        setIsOpen(false);
    };
    const handleServiceShow = ()=>{
        setServiceShow(!serviceShow);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "navbar-area",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "techmax-responsive-nav index-navber-responsive",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "techmax-responsive-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "logo",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: "/",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "assets/img/logo/Krologix logo.svg",
                                            className: "white-logo",
                                            alt: "logo"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "assets/img/logo/Krologix logo.svg",
                                            className: "black-logo",
                                            alt: "logo"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "menu-icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(external_react_feather_.Menu, {
                                        onClick: toggleDrawer
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((external_react_modern_drawer_default()), {
                                        open: isOpen,
                                        onClose: toggleDrawer,
                                        direction: "top",
                                        className: "Drawer",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "navbar-nav",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "nav-item",
                                                        onClick: handleDrawerClose,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/",
                                                            className: "nav-link ",
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "nav-item",
                                                        onClick: handleDrawerClose,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/about",
                                                            className: "nav-link",
                                                            children: "About Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "nav-item ",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "drawer-services",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/company-services",
                                                                        className: "nav-link",
                                                                        onClick: handleDrawerClose,
                                                                        children: "Services"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx(external_react_feather_.ChevronDown, {
                                                                        size: 20,
                                                                        onClick: handleServicesOpen,
                                                                        className: "m-r"
                                                                    })
                                                                ]
                                                            }),
                                                            servicesOpen ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                    className: "navbar-nav",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/application-development",
                                                                                className: "nav-link",
                                                                                children: "Application development"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/ecommerce",
                                                                                className: "nav-link",
                                                                                children: "E-Commerce"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/cloud",
                                                                                className: "nav-link",
                                                                                children: "Cloud"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/artificial-intelligence",
                                                                                className: "nav-link",
                                                                                children: "Artificial Intelligence"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/data-center-solutions",
                                                                                className: "nav-link",
                                                                                children: "Data Center Solutions"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/crm",
                                                                                className: "nav-link",
                                                                                children: "CRM"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/cyber-security",
                                                                                className: "nav-link",
                                                                                children: "Cyber Security"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/staff-augmentation",
                                                                                className: "nav-link",
                                                                                children: "Staff Augmentation"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                            className: "nav-item f-s",
                                                                            onClick: handleDrawerClose,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: "/agile",
                                                                                className: "nav-link",
                                                                                children: "Agile"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {})
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "nav-item",
                                                        onClick: handleDrawerClose,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/contact",
                                                            className: "nav-link",
                                                            children: "Contact"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "techmax-nav index-navber",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                        className: "navbar navbar-expand-md navbar-light",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                className: "navbar-brand",
                                href: "/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "assets/img/logo/logo-no-background.png",
                                        className: "white-logo img-logo",
                                        alt: "logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "assets/img/logo/logo-no-background.png",
                                        className: "black-logo img-logo",
                                        alt: "logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "h-1"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "collapse navbar-collapse mean-menu",
                                id: "navbarSupportedContent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    className: "nav-link ",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/about",
                                                    className: "nav-link",
                                                    children: "About Us"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "/company-services",
                                                        className: "nav-link",
                                                        children: [
                                                            "Services ",
                                                            /*#__PURE__*/ jsx_runtime.jsx(external_react_feather_.ChevronDown, {
                                                                size: 20
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/groundMount",
                                                                    className: "nav-link",
                                                                    children: "Ground-Mounted Solar Power Plant"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/rooftopGrid",
                                                                    className: "nav-link",
                                                                    children: "Rooftop Grid-Connected Solar Power Plant"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/cloud",
                                                                    className: "nav-link",
                                                                    children: "Off-Grid Solar Power Plant"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/artificial-intelligence",
                                                                    className: "nav-link",
                                                                    children: "Hybrid Solar Power Plant"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/blogs",
                                                    className: "nav-link",
                                                    children: "Blogs"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/capturingmoment",
                                                    className: "nav-link",
                                                    children: "Capturing Moments"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "other-option",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            className: "default-btn",
                                            href: "/contact",
                                            children: [
                                                "Contact Us ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/_App/Footer/index.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "footer-area section-padding",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "footer-heading",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: "About Us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "At Krologix, we're your technology enablers, specializing in mobile and website development, data centers, staff augmentation, social networking, ERP systems, and e-commerce. Our focus is on innovative solutions tailored to your goals, ensuring your business thrives in the digital landscape."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "footer-social",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "https://www.facebook.com/KrologixTechnologies/",
                                                        target: "\\blank",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "https://www.instagram.com/krologix/",
                                                        target: "blank",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fab fa-instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "https://www.linkedin.com/in/krologix-technologies-4099011b5/",
                                                        target: "blank",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fab fa-linkedin"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "https://twitter.com/krologix",
                                                        target: "\\blank",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-2 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "footer-heading",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: "Our Services"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "footer-quick-links",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/artificial-intelligence",
                                                            children: "Artificial Intelligence"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/application-development",
                                                            children: "Application Development"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/cloud",
                                                            children: "Cloud"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/crm",
                                                            children: "CRM"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/cyber-security",
                                                            children: "Cyber Security"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/ecommerce",
                                                            children: "E-commerce"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/agile",
                                                            children: "Agile"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-2 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "footer-heading",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: "Quick Links"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "footer-quick-links",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/about",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/company-services",
                                                        children: "Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/contact",
                                                        children: "Contact Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/blog",
                                                        children: "Blog"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {})
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "footer-heading",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: "Contact Information"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "footer-info-contact",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                            children: "Landline:"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "  011-45035625 "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                            children: "Phone:"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: " +91 99536 63272 ,\xa0 +91 96501 02104  "
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "footer-info-contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                        children: "Email:"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "footer-info-contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                        children: "Address:"
                                                    }),
                                                    " Krologix Technologies Pvt. Ltd. 303, Surya Complex, 21 Veer Savarkar Block, Shakarpur, Delhi- 110092"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                            className: "newsletter-form",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "email",
                                                    className: "input-newsletter",
                                                    placeholder: "Enter your email",
                                                    name: "EMAIL",
                                                    required: "",
                                                    autoComplete: "off"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    className: "default-btn",
                                                    type: "submit",
                                                    children: [
                                                        "Subscribe ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "copyright-area",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row align-items-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-12 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "far fa-copyright"
                                    }),
                                    " Krologix - All Rights Reserved. \xa0  Developed By -  ",
                                    "",
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "https://www.raysteedsinfotech.com/",
                                        target: "\\blank",
                                        children: "Raysteeds Infotech Private Limited"
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _App_Footer = (Footer);

;// CONCATENATED MODULE: ./services/metaTags.js
const META_TAGS = [
    {
        "slug_url": "/",
        "title": "NGL Solar Private Limited",
        "description": "Welcome to NGL Solar Services"
    }
];

;// CONCATENATED MODULE: ./components/_App/Layout/index.js






// import { BASE_URL } from "@/services/const";

const Layout = ({ children })=>{
    const router = (0,router_.useRouter)();
    const slugUrl = router.asPath;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    META_TAGS.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("title", {
                                children: META_TAGS[0].title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                                name: "description",
                                content: META_TAGS[0].description
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                                name: "keywords",
                                content: META_TAGS[0].keywords
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(_App_Footer, {})
        ]
    });
};
/* harmony default export */ const _App_Layout = (Layout);

;// CONCATENATED MODULE: ./context/AppContext.js

const AppContext = /*#__PURE__*/ (0,external_react_.createContext)();
/* harmony default export */ const context_AppContext = (AppContext);

// EXTERNAL MODULE: ./services/const.js
var services_const = __webpack_require__(3032);
;// CONCATENATED MODULE: ./services/helper.js

const setLocalStorage = (key, value)=>{
    if (false) {}
};
const getLocalStorage = (key)=>{
    let value = null;
    if (false) {}
    return JSON.parse(value);
};
const getS3Url = (url)=>{
    const s3url = `${S3_BASE_URL}/${url}`;
    return s3url;
};

;// CONCATENATED MODULE: ./context/AppState.js




const AppState = (props)=>{
    const [username, setUsername] = (0,external_react_.useState)(getLocalStorage("usrn") || null);
    return /*#__PURE__*/ jsx_runtime.jsx(context_AppContext.Provider, {
        value: {
            username,
            setUsername
        },
        children: props.children
    });
};
/* harmony default export */ const context_AppState = (AppState);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(5931);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./styles/utilities.css
var utilities = __webpack_require__(5654);
// EXTERNAL MODULE: ./styles/app.css
var app = __webpack_require__(7501);
// EXTERNAL MODULE: ./styles/home.css
var home = __webpack_require__(7097);
// EXTERNAL MODULE: ./styles/responsive.css
var responsive = __webpack_require__(6050);
// EXTERNAL MODULE: ./styles/fontawesome.min.css
var fontawesome_min = __webpack_require__(3589);
// EXTERNAL MODULE: ./styles/about.css
var about = __webpack_require__(3213);
// EXTERNAL MODULE: ./styles/contact.css
var contact = __webpack_require__(1436);
// EXTERNAL MODULE: ./styles/pe-icon-7-stroke.css
var pe_icon_7_stroke = __webpack_require__(1288);
// EXTERNAL MODULE: ./styles/blog.css
var blog = __webpack_require__(886);
;// CONCATENATED MODULE: ./pages/_app.js




// Import Styles 











function App({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(context_AppState, {
        children: /*#__PURE__*/ jsx_runtime.jsx(_App_Layout, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 6088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    static async getInitialProps(ctx) {
        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
        return {
            ...initialProps
        };
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/images/favicon.ico"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 3032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AU: () => (/* binding */ SERVICES),
/* harmony export */   Lc: () => (/* binding */ BLOGS),
/* harmony export */   _g: () => (/* binding */ CAPUTRING_MOMENTS)
/* harmony export */ });
/* unused harmony exports API_BASE_URL, S3_BASE_URL */
const API_BASE_URL = process.env.API_BASE_URL;
const S3_BASE_URL = process.env.S3_BASE_URL;
const SERVICES = [
    {
        className: "pe-7s-share",
        title: "Ground-Mounted Solar Power Plant",
        content: "Leverage open land to generate renewable energy with our expertly designed ground-mounted solar power plants. Ideal for utility-scale projects, our ground-mounted systems are built for maximum efficiency and durability.",
        path: "/application-development"
    },
    {
        className: "pe-7s-display1",
        title: "Rooftop Grid-Connected Solar Plant",
        content: "Turn your unused rooftop space into a power generator with our rooftop grid-connected solar power plants. these systems reduce energy costs while contributing to sustainability goals. ",
        path: "/ecommerce"
    },
    {
        className: "pe-7s-cloud",
        title: "Off-Grid Solar Power Plant",
        content: "Achieve energy independence with our off-grid solar power plants. Designed for remote locations or areas with unreliable grid access, these systems provide a reliable source of power anytime, anywhere.",
        path: "/cloud"
    },
    {
        className: "pe-7s-user",
        title: "Hybrid Solar Power Plant",
        content: "Combine solar power with other renewable or conventional energy sources to ensure a reliable and consistent energy supply. Our hybrid solar power plants are tailored to meet the unique energy needs of your facility.",
        path: "/artificial-intelligence"
    },
    {
        className: "pe-7s-box1",
        title: "Floating Solar Power Plant",
        content: "Utilize water bodies to generate clean energy with our innovative floating solar power plants. Designed for reservoirs, lakes, and ponds, these systems maximize space utilization while delivering high energy output.",
        path: "/data-center-solutions"
    },
    {
        className: "pe-7s-graph2",
        title: "Solar Power Plant Operation & Maintenance (O&M)",
        content: "Ensure your solar power plant operates at peak efficiency with our comprehensive O&M services. We offer regular maintenance, performance monitoring, and repairs to maximize your plant’s energy production and lifespan.",
        path: "/crm"
    },
    {
        className: "pe-7s-way",
        title: "Solar Energy Storage Solutions",
        content: "Store excess energy and manage demand with our advanced energy storage solutions. Our systems help balance energy supply, improve grid stability, and ensure power availability during peak demand periods or outages.",
        path: "/cyber-security"
    },
    {
        className: "pe-7s-network",
        title: " Solar Plant Monitoring & Analytics",
        content: "Optimize the performance of your solar power plant with our state-of-the-art monitoring and analytics services. We provide real-time data and insights to help you track energy production, identify issues, and improve efficiency.",
        path: "/staff-augmentation"
    },
    {
        className: "pe-7s-tools",
        title: "Community Solar Projects",
        content: "Offer solar power to multiple customers or members of a community with our community solar project services. These shared solar installations provide a sustainable energy solution for residents, businesses, and municipalities.",
        path: "/agile"
    }
];
const CAPUTRING_MOMENTS = [
    {
        img: "assets/img/blog/blog-1.jpg",
        title: "The Biggest Trends in Technology We've Seen This Year",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
    },
    {
        img: "assets/img/blog/blog-2.jpg"
    },
    {
        img: "assets/img/blog/blog-3.jpg"
    },
    {
        img: "assets/img/blog/blog-4.jpg"
    },
    {
        img: "assets/img/blog/blog-5.jpg"
    },
    {
        img: "assets/img/blog/blog-6.jpg"
    },
    {
        img: "assets/img/blog/blog-1.jpg"
    },
    {
        img: "assets/img/blog/blog-2.jpg"
    },
    {
        img: "assets/img/blog/blog-3.jpg"
    },
    {
        img: "assets/img/blog/blog-4.jpg"
    },
    {
        img: "assets/img/blog/blog-5.jpg"
    },
    {
        img: "assets/img/blog/blog-6.jpg"
    }
];
const BLOGS = [
    {
        img: "assets/img/blog/blog-1.jpg",
        title: "The Biggest Trends in Technology We've Seen This Year",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
    },
    {
        img: "assets/img/blog/blog-2.jpg",
        title: "The Biggest Trends in Technology We've Seen This Year",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
    },
    {
        img: "assets/img/blog/blog-3.jpg",
        title: "The Biggest Trends in Technology We've Seen This Year",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
    }
];


/***/ }),

/***/ 3213:
/***/ (() => {



/***/ }),

/***/ 7501:
/***/ (() => {



/***/ }),

/***/ 886:
/***/ (() => {



/***/ }),

/***/ 1436:
/***/ (() => {



/***/ }),

/***/ 3589:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 7097:
/***/ (() => {



/***/ }),

/***/ 1288:
/***/ (() => {



/***/ }),

/***/ 6050:
/***/ (() => {



/***/ }),

/***/ 5654:
/***/ (() => {



/***/ })

};
;