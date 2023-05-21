import Head from "next/head";

import "../css/globals.css";
import "../css/index.css";

import "../css/globals.css";
import "../css/index.css";
import "../css/navbar.css";
import "../css/slider.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

import { CartProvider } from "../contexts/CartContext";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chamling Cycle : A Galaxy of Bicycles</title>
        <meta
          name="description"
          content="The bike shop in Pokhara, Nepal. Chamling Company is Running Adventures Cycling Tours / Trips.
           Aslo MTB Rides, Sale, Rental & Bicycles Maintenance. And giving much better services to customers. 
           Not only that our team all born for cycling / MTB. We have more than 10 years experience guides
            mechanics and riders staffs. And also the founder self 
            15 years experienced in Mountain Biking in all sectors."
        />
        <link rel="icon" href="/newlogo.jpg" />
      </Head>

      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
