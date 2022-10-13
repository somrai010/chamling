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
    <title>Jomsom to Muktinath Biking Tours for 5 days</title>
    <meta name="description" content="
Jomsom to Muktinath Biking Tours is adventure expedition ride. Which is Start from 3200 m high Altitude. Mustang area is famous for cycling and hiking for tourists and domestic tourist. Is desert land Wendy and cold weather. So is much challenging for biking.
" />
    <meta name='keywords' content="jomsom to muktinath tour" />
   
    <meta property="og:image" content="/tours/jomsom2.jpg" />
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
<h1>Jomsom to Muktinath Biking Tours for 5 days</h1>
<p>A perfect tour in Mustang for adventure lovers!</p>
<p>

Jomsom to Muktinath Biking Tours is adventure expedition ride. Which is Start from 3200 m high Altitude. Mustang area is famous for cycling and hiking for tourists and domestic tourist. Is desert land Wendy and cold weather. So is much challenging for biking.
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>
        First day Arrive to Airport by taxi early morning at 5am or 6am depending on flight ticket time. Fly to Jomsom and have a breakfast at Jomsom. After breakfast, ride 10 km to Kagbeni and stay overnight at Kagbeni.
        </li>
    <li><span><FaLongArrowAltRight/></span>
    Second day after breakfast start ride to Muktinath 14km totally uphill. And after the lunch at Muktinath we’ll visit Mukthinath Temple. It has 108 taps and located at 3760m high. So second night we will stay in Muktinath.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Third day 7:30am after breakfast ride down to Marpha 30km. It is the Buddha religion place and famous for apple farms. That will be 3rd night at Marpha.
 
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Forth day ride to Tatopani (hot spring water) 40km downhill. We take a steam of hot water which is best meditation for body and enjoy the last night of biking trips at Tatopani.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Fifth day ride down to Beni which is 24kms and come to Pokhara by jeep.
 </li>


    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/jomsom1.jpg" alt='jomsom photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  <Image src='/tours/jomsom2.jpg' alt='jomsom photo' 
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
