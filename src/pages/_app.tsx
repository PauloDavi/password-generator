import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { HomeContextProvider } from '../contexts/HomeContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <HomeContextProvider>
        <CSSReset />
        <Component {...pageProps} />
      </HomeContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
