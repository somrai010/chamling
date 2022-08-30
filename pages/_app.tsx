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
<title>Chamling Cycle Pokhara | The Bike Shop Nepal</title>
<meta name="description" content="Chamling cycle is one of the best cycle shop of pokhara lakeside" />
<link rel="icon" href="/logo.jpg" />
<meta property="og:image" content='/1.jpg' />
  </Head>

<CartProvider>

  <Component {...pageProps} />

</CartProvider>
  </>
)}

export default MyApp
