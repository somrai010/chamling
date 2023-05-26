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
    <title>Pokhara To Begnas Cycling tour for 2 days</title>
    <meta name="description" content="Begnas Lake is another peace and beauty clean Lake at Lekhanath. Begnas Most famous on Fish items and quite environment. Begnas Cycling Route is 65 km, Altitude 1200m and XC Trails. " />
    <meta name='keywords' content="pokhara to begnas cycle tour, pokhara to begnas cycling" />
   
    <meta property="og:image" content="/tours/begnas1.jpg" />
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
<h1>Pokhara To Begnas Cycling tour for 2 days</h1>
<p>A perfect tour in Pokhara for adventure lovers!</p>
<p>
Begnas Lake is another peace and beauty clean Lake at Lekhanath. Begnas Most famous on Fish items and quite environment. Begnas Cycling Route is 65 km, Altitude 1200m and XC Trails. 
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>Day first we start biking at 9 am from the bike shop and have lunch at Kalikasthan top of 1200m. Day first will be 13km up hill section. And then down to Begnas Lake. And stay at Begnat Lake guest house. </li>
    <li><span><FaLongArrowAltRight/></span>
 Day 2, star cycling after brake fast at 8 am. And heading to rest of 30 Kms ride. After 1 hour 40 minutes ride. You enter to Pokhara valley and rest of rides for sightseen places. 1st International Mountain Museum, 2nd Devils Fall and Shiva and Ride to Pame village for lunch and back to Bike shop.
 
 </li>
    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/begnas1.jpg" alt='Begnas photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  <Image src='/tours/bamdi2.jpg' alt='Begnas photo' 
   layout='fill'
    />
    
    </div>
    <div className={styles.images}>
  
  <Image src='/tours/begnas3.jpg' alt='Begnas photo' 
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
  </div>
  </a>
</div>
    </div>
</div>

<Footer/>
    </div>
  )
}
