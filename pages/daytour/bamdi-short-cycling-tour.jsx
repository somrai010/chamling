import React from 'react'
import Head from 'next/head';
import Nav from '../../components/Nav';
import Navdetails from '../../components/Navdetails';
import Footer from '../../components/Footer';

import styles from './sass/daytour.module.scss';

import {FaLongArrowAltRight} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GoPerson} from 'react-icons/go';
import {MdOutgoingMail} from 'react-icons/md';
import {MdEmail} from 'react-icons/md'


export default function Index() {
  return (
    <div>
<Head>
    <title>Bamdi Short Cycling Tour</title>
    <meta name="description" content="Chamling Cycle Shop is located in Pokhrara. Which is hub of Adventures Expedition. Since 2012 Chamling Store is giving much better service to customers. Not only that our team all born for cycling / MTB. We have more than 10 years experience guides mechanics and riders staffs. And also the founder self 15 years experienced in Mountain Biking in al sectors." />
    <link rel="icon" href="/logo.jpg" />
    <meta property="og:image" content='/slide/6.jpg' />


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
<h1>Bamdi Short Cycling Day tour</h1>
<p>A perfect day tour in Pokhara for adventure lovers!</p>
<p>
Bamdi Cycling Tour is 3 hours easy flat ride from the bike shop. Total distances is 22 km and Elevation start is 900m.</p>
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

<img src='/tours/bamdi1.jpg' alt='adventure photo'/>
   <img src='/tours/bamdi2.jpg' alt='adventure photo'/>
</div>
<div className={styles.contacts}>
  <div className={styles.contact}>
    <h4>For The Best Package Price:</h4>
    <h5><span><GoPerson/></span> Som Rai</h5>
    <h5><span><BsFillTelephoneFill/></span> +977- 9817172160</h5>
    <h5><span><MdEmail/></span> somrai010@gmail.com</h5>
  </div>
</div>
    </div>
</div>

<Footer/>
    </div>
  )
}
