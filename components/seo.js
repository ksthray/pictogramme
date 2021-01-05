import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';

const Seo = ({
    // date,
    description,
    image,
    title,
    keywords,
    router
    }) => {
        const domain = 'https://pictogramme.vercel.app/';
        const formattedTitle = title;
        const url = router && router.asPath ? router.asPath : undefined;
        const canonical = url && url === '/' ? domain : domain + url;
        const featuredImage = domain + image;
    
    return (
        <>
            <Head>
                <title>{formattedTitle}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {description && <meta content={description} name="description" />}
                {keywords && <meta content={keywords} name="keywords" />}
                <meta content="follow, index" name="robots" />
                <meta content="#ffffff" name="theme-color" />
                <meta content="#ffffff" name="msapplication-TileColor" />
                {/* <meta
                    content="/favicons/browserconfig.xml"
                    name="msapplication-config"
                /> */}
                <link
                    href="/favicons/favicon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/favicons/favicon.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/favicons/favicon.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                {/* <link href="/favicons/site.webmanifest" rel="manifest" />
                <link
                    color="#5bbad5"
                    href="/favicons/safari-pinned-tab.svg"
                    rel="mask-icon"
                /> */}
                <link href="/favicons/favicon.ico" rel="shortcut icon" />
                {/* <link
                    crossOrigin=""
                    href="https://fonts.gstatic.com/"
                    rel="preconnect"
                /> */}
                {/* <link
                    crossOrigin=""
                    href="https://cdn.usefathom.com"
                    rel="preconnect"
                /> */}
                {/* <link
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap"
                    rel="preload"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap"
                    media="print"
                    onLoad="this.media='all'"
                    rel="stylesheet"
                /> */}
                {/* <script defer src="https://gumroad.com/js/gumroad.js" /> */}
                {url && <link href={canonical} rel="canonical" />}
                <meta content="fr_FR" property="og:locale" />
                <meta content={formattedTitle} property="og:title" />
                <meta content={description} property="og:description" />
                <meta content={canonical} property="og:url" />
                {/* <meta content="5e41b2275db646a5" name="yandex-verification" /> */}
                {/* <meta
                    content="t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc"
                    name="google-site-verification"
                /> */}
                {featuredImage && (
                    <>
                    <meta content={featuredImage} property="og:image" />
                    <meta content={description} property="og:image:alt" />
                    </>
                )}
                {/* {date && (
                    <>
                    <meta content="article" property="og:type" />
                    <meta content={dateTime(date)} property="article:published_time" />
                    </>
                )} */}
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="@pictogramme" name="twitter:site" />
                <meta content="@pictogramme" name="twitter:creator" />
            </Head>
            {/* {date && (
            <ArticleJsonLd
                authorName="Lee Robinson"
                dateModified={dateTime(date)}
                datePublished={dateTime(date)}
                description={description}
                images={[featuredImage]}
                publisherLogo="https://masteringnextjs.com/favicons/android-chrome-192x192.png"
                publisherName="Mastering Next.js"
                title={formattedTitle}
                url={canonical}
            />
            )} */}
        </>
    );
};
    
export default withRouter(Seo);