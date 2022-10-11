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
    <title>Sarangkot Bike tour</title>
    <meta name="description" content="Sarangkot is opposite of Pumdi Bhimdi trail. Sarangkot has long beauty of history. Sarangkot mostly famous in Sunrise view point and Paragliding Take off. It's elevation is 1400m, Total 35 km. Average duration 5 hours." />
    <meta name='keywords' content="sarangkot bike tour, pokhara to sarangkot bike tour" />
   
    <meta property="og:image" content="/tours/sarangkot.jpg" />
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
<h1>Sarangkot Bike Tour</h1>
<p>A perfect day tour in Pokhara for adventure lovers!</p>
<p>
Sarangkot is opposite of Pumdi Bhimdi trail. Sarangkot has long beauty of history. Sarangkot mostly famous in Sunrise view point and Paragliding Take off. It's elevation is 1400m, Total 35 km. Average duration 5 hours.
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>Tour departure at 9am from the bike shop. Start Lakeside and rest at Methalang hill. After the 1 hour 30 minutes ride. </li>
    <li><span><FaLongArrowAltRight/></span>And up hill ride 1 hour to reach to top of the Sarangkot have a lunch with relax feel. And Walk around for view with camera. After that get ready to adventure down hill ride. </li>
    <li><span><FaLongArrowAltRight/></span>After the 7 km downhill ride you will reach to Chankhapur place. And Chankhapur to Lakeside 6 km easy pedaling up to the bike shop. </li>
    
    
    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/sarangkot.jpg" alt='sarangkot photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  

  
  
  <Image src='/tours/sarangkot2.jpg' alt='sarangkot photo' 
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
