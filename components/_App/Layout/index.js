import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from '@/components/_App/Header';
import Footer from "@/components/_App/Footer";
// import { BASE_URL } from "@/services/const";
import { META_TAGS } from "@/services/metaTags";

const Layout = ({ children }) => {
    const router = useRouter();
    const slugUrl = router.asPath;

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="canonical" href={`${BASE_URL}${slugUrl}`} /> */}
                {
                    META_TAGS.length > 0 && (
                        <>
                            <title>{META_TAGS[0].title}</title>
                            <meta name="description" content={META_TAGS[0].description} />
                            <meta name="keywords" content={META_TAGS[0].keywords} />
                        </>
                    )
                }
            </Head>

            <Header />
            {children}
            <Footer />

        </>
    );
}

export default Layout;