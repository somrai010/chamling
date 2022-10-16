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
    <title>Pame Short Cycling Day Tour</title>
    <meta name="description" content="Pame Cycling Tour is 3 hours easy flat ride from the bike shop. Total distances is 22 km and Elevation start is 900m." />
    <meta name='keywords' content="pame short cycling day tour, pame cycle tour, cycle tour to peme, cycle tour pokhara to pame" />
   
    <meta property="og:image" content="/tours/bamdi1.jpg" />
    <link rel="icon" href="/logo.jpg" />

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
<h1>Pame Short Cycling Day tour</h1>
<p>A perfect day tour in Pokhara for adventure lovers!</p>
<p>
Pame Cycling Tour is 3 hours easy flat ride from the bike shop. Total distances is 22 km and Elevation start is 900m.</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>Bike tour start 9 am from bike shop. After an hour ride, Guide stop for water brake about 10 minutes and again continue ride.</li>
    <li><span><FaLongArrowAltRight/></span>And again an hour ride. Stop for photos shoot and rest. And then rest of an hour, ride till the bike store.</li>
    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/bamdi1.jpg" alt='adventure photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  

  
  
  <Image src='/tours/bamdi2.jpg' alt='adventure photo' 
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