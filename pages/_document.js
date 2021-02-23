import React from 'react';
import Document, { Html, Head, Main, NextScript } from "next/document"

import {ServerStyleSheet} from "styled-components"

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage =  () => originalRenderPage({
                enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    render(){
        return (
            <Html lang="fr">
                <Head>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    <meta title="Agence créa et print" />
                    <link rel="icon" sizes="96x96" href="favicon.ico" />
                    <meta name="theme-color" content="#319795"></meta>
                    <meta name="google-site-verification" content="RJAX3bTXXpyOo6F_sdRW_G8GjoWCsqZZaRywW6GaiXs" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}