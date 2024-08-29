import React from "react";
import Link from "next/link";

const Banner = ({ data = [] }) => {
    const { heading, bgBanner, breadcrumb } = data;
    return (
        <>
            <div className="page-title-area">
                <div
                    style={{ backgroundImage: `url(${bgBanner})` }}
                />
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>{heading}</h2>
                                <ul>
                                    {
                                        breadcrumb.map(item => (
                                            <li key={item.text} className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
                                                {
                                                    item.url ? (
                                                        <Link href={item.url} title={item.text}>
                                                            {item.text}
                                                        </Link>
                                                    ) : (
                                                        item.text
                                                    )
                                                }

                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;