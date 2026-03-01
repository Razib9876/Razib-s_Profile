import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Razib - Full Stack Developer</title>
        <link rel="shortcut icon" href="/circle.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
