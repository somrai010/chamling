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
        <title>Chamling Cycle Pokhara | The Bike Shop Nepal</title>
        <meta name="description" content="Chamling cycle is one of the best cycle shop of pokhara lakeside" />
        <link rel="icon" href="/logo.jpg" />
        <meta property="og:image" content='/slide/1.jpg' />


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
