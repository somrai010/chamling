import '../css/globals.css'
import '../css/index.css';


import Head from 'next/head'

import '../css/globals.css'
import '../css/index.css';
import '../css/navbar.css';
// import '../css/slider.css'



// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "swiper/css/bundle";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
