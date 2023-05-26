import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Nav from '../../components/Nav';
import Navdetails from '../../components/Navdetails';
import Footer from '../../components/Footer';

import styles from './sass/daytour.module.scss';

import {FaLongArrowAltRight} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GoPerson} from 'react-icons/go';
import {MdOutgoingMail} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import {FaTripadvisor} from 'react-icons/fa';
import { Rating } from '@mui/material';



export default function Index() {
  return (
    <div>
<Head>
    <title>Biking Around The Phewa Lake</title>
    <meta name="description" content="Around the Phewa Lake Cycling Tour is most beautiful ride and adventure. From the top of Pumdi. From there visible Himalayas, Phewa Lake, Sarangkot and Pokhara City. Elevation is 1200m. Total distance 30km and average duration is 5 hours ride." />
    <meta name='keywords' content="biking around the phewa lake, phewa lake tour, phewa lake biking tour provider" />
   
    <meta property="og:image" content="/tours/phewa1.jpg" />
    <link rel="icon" href="/logo1.jpg" />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Fira+Sans+Condensed&family=Roboto:wght@300&family=Tapestry&display=swap" rel="stylesheet"/> 
  
</Head>



<div>
<Nav/>
<Navdetails/>
</div>
<div className={styles.container}>
    <div className={styles.heading}>
<h1> Biking Around the Phewa Lake</h1>
<p>A perfect day tour in Pokhara for adventure lovers!</p>
<p>
Around the Phewa Lake Cycling Tour is most beautiful ride and adventure. From the top of Pumdi. From there visible Himalayas, Phewa Lake, Sarangkot and Pokhara City. Elevation is 1200m. Total distance 30km and average duration is 5 hours ride.
</p>
    
    
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>The bike tour start at 9am. About an hour flat ride from Lakeside. We stop at Pame for rest and then Up..Up.</li>
    <li><span><FaLongArrowAltRight/></span>After 6 km up hill ride. And then we reach top of the Pumdi. From Pumdi can see to the beauty of Pokhara valley. And then fun single track ride into to the jungle about 30 minutes and reach to Damside. Damside to Lakeside by easy pedaling.</li>
    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/phewa3.jpg" alt='Phewa lake biking photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  

  
  
  <Image src='/tours/phewa2.jpg' alt='Phewa lake biking photo' 
   layout='fill'
    />
    
    </div>



</div>
<div className={styles.contacts}>
  <div className={styles.contact}>
    <h4>For The Best Package Price:</h4>
    {/* <h5><span><GoPerson/></span> Som Rai</h5> */}
    <h5><span><BsFillTelephoneFill/></span> +977- 9817172160</h5>
    <h5><span><MdEmail/></span> chamlingcycle@gmail.com</h5>
  </div>
<a href='https://www.tripadvisor.com/Attraction_Review-g293891-d7907590-Reviews-Chamling_Cycle_Pvt_Ltd-Pokhara_Gandaki_Zone_Western_Region.html' target="_blank" rel="noreferrer">
  <div className={styles.contact}>
    
   <h2><FaTripadvisor/></h2>
   <h2>trip<strong>advisor</strong></h2>
   <h2><Rating name="read-only" value={4.5} readOnly precision={0.5}/></h2>
   <p>One Of The Best In Pokhara</p>

   {/* <img src='/tours/tripadvisor.jpeg' alt='tripadvisor'/> */}
  </div>
  </a>
</div>
    </div>
</div>

<Footer/>
    </div>
  )
}
