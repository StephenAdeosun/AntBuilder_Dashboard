import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'; // Import the AppProps type

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
