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
    <title>Biking Tour At Mathikhan</title>
    <meta name="description" content="Matikhan is the next district near by Pokhara. It&apos;s quite peace distinaton and beauty of nature. From there you will see all Himalayas and hills of Pokhara valley.
Total distance is 35km, Elevation 1200 m and Average duration is 6 hours" />
    <meta name='keywords' content="biking tour at mathikhan, mathikhan biking tour provider" />
   
    <meta property="og:image" content="/tours/mathikhan1.jpg" />
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
<h1>Biking Tour At Mathikhan</h1>
<p>A perfect day tour in Pokhara for adventure lovers!</p>
<p>
Matikhan is the next district near by Pokhara. It&apos;s quite peace distinaton and beauty of nature. From there you will see all Himalayas and hills of Pokhara valley.
Total distance is 35km, Elevation 1200 m and Average duration is 6 hours
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>Tour departure time is 9 am. And ride start continue about 40 minutes to end of city. And then 7 km up hill ride easily with some rest brake and fell adventures. </li>
    <li><span><FaLongArrowAltRight/></span>After the 2 hours up hill adventure ride. You will get lunch, house. And have aLunch and 30 minutes rest again and then pedal 15 minutes to rich top of the Mathikhan.  </li>
    <li><span><FaLongArrowAltRight/></span>And then from the Matikhan non stop 10 km downhill trail. Which is enjoyable fun adventure down hill ride. Then easy relax depal up to Bike shop about 20 minutes.</li>
    
    
    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/mathikhan1.jpg" alt='mathikhan photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  

  
  
  <Image src='/tours/mathikhan2.jpg' alt='Mathikhan photo' 
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
