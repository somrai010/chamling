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
    <title>Dhampus to Australian Camp Cycling tour for 2 days</title>
    <meta name="description" content="
Dhampus and Australia camp both distinaton are near each other and complete with beauty natures. From Australia camp Annapurna and Dhaulagiri Himalayas range can seen likes close to you and little cold place than Pokhara. It&apos;s Altitude is 1800m and Total distances 70 km. " />
    <meta name='keywords' content="dhampus to australian camp cycle tour, dhampus to australian camp tour" />
   
    <meta property="og:image" content="/tours/dhampus1.jpg" />
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
<h1>Dhampus to Australian Camp Cycling tour for 2 days</h1>
<p>A perfect tour in Pokhara for adventure lovers!</p>
<p>

Dhampus and Australia camp both distinaton are near each other and complete with beauty natures. From Australia camp Annapurna and Dhaulagiri Himalayas range can seen likes close to you and little cold place than Pokhara. It&apos;s Altitude is 1800m and Total distances 70 km.
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>
        Day first, 9 am start pedal to Hemjaa on road an 11 km and Hemja to Astam to Dhampus up..up. 18 km. And lunch at Dhampus and then hike an hour&apos;s to Australian Camp and stay 1 night there.
        </li>
    <li><span><FaLongArrowAltRight/></span>
    Day 2, after the brakefast we start at 8 am for down hill 5 km to Phedi and Phedi Sarangkot climb up hills and have lunch at the Sarangkot And again head down to Chankhapur about 10 km and easy flat an hour Pedal up to the bike shop. 
 </li>
    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/dhampus1.jpg" alt='Dhampus photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  <Image src='/tours/dhampus2.jpg' alt='Dhampus photo' 
   layout='fill'
    />
    
    </div>
    <div className={styles.images}>
  
  <Image src='/tours/dhampus3.jpg' alt='Dhampus photo' 
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
