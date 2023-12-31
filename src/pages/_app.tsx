import '../app/globals.css'; 
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Munchies Recipes</title> 
        <link rel="icon" href="/favicon-burger.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

