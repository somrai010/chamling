import type { NextPage } from 'next'
import Head from 'next/head'

import Nav from '../components/Nav';
import Map from '../components/Map';

import Slider from '../components/Slider';
import Newarrivals from '../components/Newarrivals';
import Bestseller from '../components/Bestseller';
import Trendingnow from '../components/Trendingnow';
import Footer from '../components/Footer';
import Superfooter from '../components/Superfooter';
import Navdetails from '../components/Navdetails';






const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cycle Tour in Nepal - The Bike Shop Pokhara</title>
        <meta name="description" content="The bike shop in Pokhara, Nepal. Chamling Company is Running Adventures Cycling Tours / Trips. Aslo MTB Rides, Sale, Rental & Bicycles Maintenance. And giving much better services to customers. Not only that our team all born for cycling / MTB. We have more than 10 years experience guides mechanics and riders staffs. And also the founder self 15 years experienced in Mountain Biking in all sectors." />
        <link rel="icon" href="/logo.jpg" />
        <meta property="og:image" content='/slide/6.jpg' />


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Fira+Sans+Condensed&family=Roboto:wght@300&family=Tapestry&display=swap" rel="stylesheet"/> 
     
     </Head>

<div className='homepage'>

<Nav/>
<Navdetails/>
<Slider/>
<Newarrivals/>

<Bestseller/>
<Trendingnow/>

<Map/>
<Footer/>
{/* <Superfooter/> */}
</div>
    </div>
  )
}

export default Home
