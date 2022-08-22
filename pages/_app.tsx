import Head from 'next/head';

import '../css/globals.css'
import '../css/index.css';


import '../css/globals.css'
import '../css/index.css';
import '../css/navbar.css';
import '../css/slider.css'



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";


import {CartProvider} from '../contexts/CartContext';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <>
  <Head>
<title>sfs</title>
  </Head>

<CartProvider>

  <Component {...pageProps} />

</CartProvider>
  </>
)}

export default MyApp
