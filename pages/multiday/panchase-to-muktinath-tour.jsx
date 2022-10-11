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
    <title>Panchase to muktinath cycling tour for 3 days</title>
    <meta name="description" content="
These 3 days Biking tours, Start Pokhara to Panchase to Matikhan to Begnas. Total km is 115 km and Maximum elevation is 2066 m. All trails are much challenges adventure bike tours.

" />
    <meta name='keywords' content="panchase to muktinath cycle tour" />
   
    <meta property="og:image" content="/tours/panchase1.png" />
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
<h1>Panchase to muktinath cycling tour for 3 days</h1>
<p>A perfect tour in Pokhara for adventure lovers!</p>
<p>

These 3 days Biking tours, Start Pokhara to Panchase to Matikhan to Begnas. Total km is 115 km and Maximum elevation is 2066 m. All trails are much challenges adventure bike tours.

</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>
        First day, Start from bike shop to Panchase. Starting an hour flat ride. ( 9 km ride ). From Gathindha to Panchase Bhanjhyan 23 km up hill ride. And the view of Panchase is ! The real Fish Tail Himalayan only you see from there. So first day much climb for tomorrow downhill.
        </li>
    <li><span><FaLongArrowAltRight/></span>
    Day 2nd Panchase to Mathikhan 42km
Down.. down.. and down. And when reach top of the Mathikhan. View is awesome and at night the Pokhara city is most beautiful of lights.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 3rd in the early morning wake up 5 am ride to Matikhan Dada for sunrise view. And back to hotel, Have brake fast and then again continue ride to Begnas Lake 22 Km. About 3 hours ride. Lunch at Begnas and back to Pokhara City.
 </li>

    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/panchase1.png" alt='panchase photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  <Image src='/tours/panchase2.jpg' alt='Panchase photo' 
   layout='fill'
    />
    
    </div>
    <div className={styles.images}>
  
  <Image src='/tours/panchase3.jpg' alt='Panchase photo' 
   layout='fill'
    />
    
    </div>
    <div className={styles.images}>
  
  <Image src='/tours/panchase4.jpg' alt='Panchase photo' 
   layout='fill'
    />
    
    </div>

    <div className={styles.images}>
  
  <Image src='/tours/panchase5.jpg' alt='Panchase photo' 
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
