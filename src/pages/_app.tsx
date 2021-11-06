import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { HomeContextProvider } from '../contexts/HomeContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ChakraProvider>
        <HomeContextProvider>
          <CSSReset />
          <Component {...pageProps} />
        </HomeContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
