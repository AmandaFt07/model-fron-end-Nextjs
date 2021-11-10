import {GlobalStyle} from "../styles/globals"
import type { AppProps } from 'next/app'
import {FontStyle} from "../styles/fonts"
import BaseLayoutComponent from 'components/layout/base'
import Head from "next/head";

export default function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
         <Head>
            <title>14 Dezembro</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            {/*Meta description lenght 50 a 160 caracteres*/}
            <meta name="description" content=" " />
            {/* Se você deseja permitir que o usuário dimensione a página, remova user-scalable = no e maximum-scale = 1.0. */}
            <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui" />
            <meta name="robots" content="index, follow" />
            <meta name="referrer" content="origin" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="author" content="Lets Comunicação" />

            <link rel="canonical" href="base.com.br" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            {/*Open Graph Facebook*/}
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content="https://.com.br/" />
            <meta property="og:title" content="14 Dezembro" />
            <meta property="og:site_name" content="" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="www.meusite.com.br/imagem.jpg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            {/* Sites Normais*/}
            <meta property="og:type" content="website" />
            {/* Artigos e Notícias */}
            <meta property="og:type" content="article" />
            <meta property="article:author" content="Autor do artigo" />
            <meta property="article:section" content="Seção do artigo" />
            <meta property="article:tag" content="Tags do artigo" />
            <meta property="article:published_time" content="date_time" />

            {/* TWitter */}
            <meta name="twitter:title" content="" />
            <meta name="twitter:description" content="" />

            <meta name="twitter:url" content="http://.com.br/" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content="" />
            <meta name="twitter:creator" content="" />
            <meta name="twitter:site" content="@empresa" />

            {/* Verificação feita pelo google - a key pode ser gerada neste site: https://support.google.com/webmasters/answer/9008080?hl=pt-BR */}
            <meta name="google-site-verification" content="" />
            <meta name="rating" content="general" />
        </Head>

        <GlobalStyle />
        <FontStyle /> 
        <BaseLayoutComponent>
            <Component {...pageProps} />
        </BaseLayoutComponent>
        </>
    )
}
