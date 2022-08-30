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
<title>Cycle Tour in Nepal | Mountain Bike in Pokhara</title>
<meta name="description" content="Chamling Cycle Shop is located in Pokhrara. Which is hub of Adventures Expedition. Since 2012 Chamling Store giving much betcustomers. Not only that our team all born for cycling / MTB. We have more than 10 years experience guides mechanics and riders staffs." />
<link rel="icon" href="/logo.jpg" />
<meta property="og:image" content='/slide/6.jpg' />
  </Head>

<CartProvider>

  <Component {...pageProps} />

</CartProvider>
  </>
)}

export default MyApp
