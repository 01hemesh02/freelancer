import Link from 'next/link';
import { Menu, ChevronDown } from 'react-feather';

const MegaMenu = () => {
  return (
    <div className="header-element megamenu-content">
      <Link
        href="#main-collapse"
        className="browse-cat"
        data-bs-toggle="collapse"
        aria-expanded="true"
      >
        <span className="menu-icon">
          <Menu />
        </span>
        <span className="menu-title">Menu</span>
        <span className="menu-arrow">
          <ChevronDown />
        </span>
      </Link>
      <div className="mainwrap collapse show" id="main-collapse">
        <ul className="main-menu">
          <li className="menu-link">
            <Link href="index.html" className="link-title">
              <span className="sp-link-title">Home</span>
              <span className="menu-arrow">
                <ChevronDown />
              </span>
            </Link>
            <Link
              href="#desk-home"
              data-bs-toggle="collapse"
              className="link-title link-title-lg"
            >
              <span className="sp-link-title">Home</span>
              <span className="menu-arrow">
                <ChevronDown />
              </span>
            </Link>
            <div
              className="menu-dropdown single-menu collapse"
              id="desk-home"
            >
              <ul className="container ul p-0">
                <li className="singlemenu-li">
                  <Link href="index.html" className="singlelink-title">
                    <span className="sp-link-title">01 Home</span>
                  </Link>
                </li>
                <li className="singlemenu-li">
                  <Link href="index-2.html" className="singlelink-title">
                    <span className="sp-link-title">02 Home</span>
                  </Link>
                </li>
                <li className="singlemenu-li">
                  <Link href="index-3.html" className="singlelink-title">
                    <span className="sp-link-title">03 Home</span>
                  </Link>
                </li>
                <li className="singlemenu-li">
                  <Link href="index-4.html" className="singlelink-title">
                    <span className="sp-link-title">04 Home</span>
                  </Link>
                </li>
                <li className="singlemenu-li">
                  <Link href="index-5.html" className="singlelink-title">
                    <span className="sp-link-title">05 Home</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu-link">
            <Link href="collection.html" className="link-title">
              <span className="sp-link-title">
                Product
                <span className="label">sale</span>
              </span>
              <span className="menu-arrow">
                <ChevronDown />
              </span>
            </Link>
            <Link
              href="#desk-single-product"
              data-bs-toggle="collapse"
              className="link-title link-title-lg"
            >
              <span className="sp-link-title">Product</span>
              <span className="menu-arrow">
                <ChevronDown />
              </span>
            </Link>
            <div
              className="menu-dropdown product-menu collapse"
              id="desk-single-product"
            >
              <ul className="container ul p-0">
                <li className="productlink-li">
                  <Link
                    href="collection.html"
                    className="productlink-title"
                  >
                    <span className="sp-link-title">Shop page</span>
                  </Link>
                  <Link
                    href="#desk-product-page"
                    className="productlink-title productlink-title-lg"
                    data-bs-toggle="collapse"
                  >
                    <span className="sp-link-title">Shop page</span>
                    <span className="menu-arrow">
                      <ChevronDown />
                    </span>
                  </Link>
                  <ul
                    className="productsupmenu-dropdown collapse"
                    id="desk-product-page"
                  >
                    <li className="productsupmenu-li">
                      <Link
                        href="collection-without.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          01 Collection
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="collection.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          02 Collection left
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="collection-right.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          03 Collection right
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="collection-list-without.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          04 Collection list
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="collection-list.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          05 Collection list left
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="collection-list-right.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          06 Collection list right
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="productlink-li">
                  <Link
                    href="collection.html"
                    className="productlink-title"
                  >
                    <span className="sp-link-title">Product page</span>
                  </Link>
                  <Link
                    href="#desk-shop-page"
                    className="productlink-title productlink-title-lg"
                    data-bs-toggle="collapse"
                  >
                    <span className="sp-link-title">Product page</span>
                    <span className="menu-arrow">
                      <ChevronDown />
                    </span>
                  </Link>
                  <ul
                    className="productsupmenu-dropdown collapse"
                    id="desk-shop-page"
                  >
                    <li className="productsupmenu-li">
                      <Link
                        href="product-template.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          01 Product style
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="product-template2.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          02 Product style
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="product-template3.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          03 Product style
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="product-template4.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          04 Product style
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="product-template5.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          05 Product style
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="product-template6.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          06 Product style
                        </span>
                      </Link>
                    </li>
                    <li className="productsupmenu-li">
                      <Link
                        href="product-template7.html"
                        className="productsuplink-title"
                      >
                        <span className="sp-link-title">
                          07 Product style
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="productlink-li">
                  <div className="menu-product">
                    <ul className="product-ul">
                      <li className="product-li">
                        <div className="product-menu-list">
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <Link
                                href="product-template.html"
                                className="pro-img"
                              >
                                <img
                                  src="assets/img/product/p-3.jpg"
                                  className="img-fluid img1"
                                  alt="p-3"
                                />
                                <img
                                  src="assets/img/product/p-4.jpg"
                                  className="img-fluid img2"
                                  alt="p-4"
                                />
                              </Link>
                            </div>
                            <div className="product-content">
                              <h6>
                                <Link href="product-template.html">
                                  A bekery doughnuts
                                </Link>
                              </h6>
                              <div className="price-box">
                                <span className="new-price">
                                  $21,00
                                </span>
                                <span className="old-price">
                                  $25,00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product-li">
                        <div className="product-menu-list">
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <Link
                                href="product-template.html"
                                className="pro-img"
                              >
                                <img
                                  src="assets/img/product/p-1.jpg"
                                  className="img-fluid img1"
                                  alt="p-1"
                                />
                                <img
                                  src="assets/img/product/p-2.jpg"
                                  className="img-fluid img2"
                                  alt="p-2"
                                />
                              </Link>
                            </div>
                            <div className="product-content">
                              <h6>
                                <Link href="product-template.html">
                                  Candy nut chocolate
                                </Link>
                              </h6>
                              <div className="price-box">
                                <span className="new-price">
                                  $11,00
                                </span>
                                <span className="old-price">
                                  $19,00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="menu-product-btn">
                      <Link
                        href="collection.html"
                        className="menu-pro-link"
                      >
                        <span className="menu-title">See more</span>
                        <span className="menu-icon">
                          <i className="feather-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="productlink-li">
                  <div className="menu-product">
                    <ul className="product-ul">
                      <li className="product-li">
                        <div className="product-menu-list">
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <Link
                                href="product-template.html"
                                className="pro-img"
                              >
                                <img
                                  src="assets/img/product/p-9.jpg"
                                  className="img-fluid img1"
                                  alt="p-9"
                                />
                                <img
                                  src="assets/img/product/p-10.jpg"
                                  className="img-fluid img2"
                                  alt="p-10"
                                />
                              </Link>
                            </div>
                            <div className="product-content">
                              <h6>
                                <Link href="product-template.html">
                                  The bread a fresh
                                </Link>
                              </h6>
                              <div className="price-box">
                                <span className="new-price">
                                  $25,00
                                </span>
                                <span className="old-price">
                                  $35,00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="product-li">
                        <div className="product-menu-list">
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <Link
                                href="product-template.html"
                                className="pro-img"
                              >
                                <img
                                  src="assets/img/product/p-7.jpg"
                                  className="img-fluid img1"
                                  alt="p-7"
                                />
                                <img
                                  src="assets/img/product/p-8.jpg"
                                  className="img-fluid img2"
                                  alt="p-8"
                                />
                              </Link>
                            </div>
                            <div className="product-content">
                              <h6>
                                <Link href="product-template.html">
                                  Sandwich olka bread
                                </Link>
                              </h6>
                              <div className="price-box">
                                <span className="new-price">
                                  $31,00
                                </span>
                                <span className="old-price">
                                  $39,00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="menu-product-btn">
                      <Link
                        href="collection.html"
                        className="menu-pro-link"
                      >
                        <span className="menu-title">See more</span>
                        <span className="menu-icon">
                          <i className="feather-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu-link">
            <Link href="collection.html" className="link-title">
              <span className="sp-link-title">Collection</span>
              <span className="menu-arrow">
                <ChevronDown />
              </span>
            </Link>
            <Link
              href="#desk-single-collection"
              className="link-title link-title-lg"
              data-bs-toggle="collapse"
            >
              <span className="sp-link-title">Collection</span>
              <span className="menu-arrow">
                <ChevronDown />
              </span>
            </Link>
            <div
              className="menu-dropdown banner-menu collapse"
              id="desk-single-collection"
            >
              <ul className="container ul p-0">
                <li className="bannermenu-li banner-hover">
                  <Link
                    href="collection.html"
                    className="collection-img banner-img"
                  >
                    <img
                      src="assets/img/menu/menu-banner-01.jpg"
                      className="img-fluid"
                      alt="menu-banner-01"
                    />
                  </Link>
                  <Link
                    href="collection.html"
                    className="collection-title"
                  >
                    <span>Bread</span>
                  </Link>
                </li>
                <li className="bannermenu-li banner-hover">
                  <Link
                    href="collection.html"
                    className="collection-img banner-img"
                  >
                    <img
                      src="assets/img/menu/menu-banner-02.jpg"
                      className="img-fluid"
                      alt="menu-banner-02"
                    />
                  </Link>
                  <Link
                    href="collection.html"
                    className="collection-title"
                  >
                    <span>Cakes</span>
                  </Link>
                </li>
                <li className="bannermenu-li banner-hover">
                  <Link
                    href="collection.html"
                    className="collection-img banner-img"
                  >
                    <img
                      src="assets/img/menu/menu-banner-03.jpg"
                      className="img-fluid"
                      alt="menu-banner-03"
                    />
                  </Link>
                  <Link
                    href="collection.html"
                    className="collection-title"
                  >
                    <span>Bun</span>
                  </Link>
                </li>
                <li className="bannermenu-li banner-hover">
                  <Link
                    href="collection.html"
                    className="collection-img banner-img"
                  >
                    <img
                      src="assets/img/menu/menu-banner-04.jpg"
                      className="img-fluid"
                      alt="menu-banner-04"
                    />
                  </Link>
                  <Link
                    href="collection.html"
                    className="collection-title"
                  >
                    <span>Pastries</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MegaMenu;