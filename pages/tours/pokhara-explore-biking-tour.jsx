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
    <title>Pokhara Explore Biking Tours</title>
    <meta name="description" content="
Pokhara Explor Biking Tours are Cycling in all famous places of Mountain Bike Tours and Adventures Mountains of Pokhara valley. And also it's all in one of the days tours of Pokhara Districts. So we Explor ride in a 6 days in Rocky, Bumpy, Trails into the jungle of Pokhara Nepal.
" />
    <meta name='keywords' content="pokhara biking tour, pokhara explore biking tour" />
   
    <meta property="og:image" content="/tours/pokhara1.jpg" />
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
<h1>Pokhara Explore Biking Tours</h1>
<p>A perfect tour in Pokhara for adventure lovers!</p>
<p>

Pokhara Explor Biking Tours are Cycling in all famous places of Mountain Bike Tours and Adventures Mountains of Pokhara valley. And also it is all in one of the days tours of Pokhara Districts. So we Explor ride in a 6 days in Rocky, Bumpy, Trails into the jungle of Pokhara Nepal. Are you ready ?
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>
        1st Day Pokhara to Bhanpus Cycling. <br/>
Total distance 35 Km. Elevation 800m to 1650m and maximum 6 to 7 hours rides.
        </li>
    <li><span><FaLongArrowAltRight/></span>
    
    2nd Day Dhampus to Bhadaure Cycling.<br/>
Total distance 34 km. Elevation 1650m to 1640m and maximum 4 to 5 hours rides.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 3rd Day Bhadaure to Panchase Cycling.<br/>
Total distance 30 km, Elevation 1640m to 2066m and Maximum 5 to 6 hours ride.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 
4rd Day Panchase to Pumdi Bhumdi Cycling. Total distance 35 km, Elevation 2066m to 1200m and Maximum 4 to 5 hours rides. 
 
 </li>

 <li><span><FaLongArrowAltRight/></span>
 5th Day Pumdi Bhumdi to Begnas Lake Cycling. Total distance 55 km Elevation 1200 to 650m and Maximum 6 to 7 hours Ride.
 
 </li>

 <li><span><FaLongArrowAltRight/></span>
 6th Day Begnas to Pokhara Cycling.<br/>
Total distance 36 km, Elevation 600m to 800m and Maximum 6 hours rides
 </li>


    </ul>
</div>


<div className={styles.images}>
  
<Image src="/tours/pokhara1.jpg" alt='jomsom photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  <Image src='/tours/pokhara2.jpg' alt='jomsom photo' 
   layout='fill'
    />
    
    </div>

    <div className={styles.images}>
  <Image src='/tours/pokhara3.jpg' alt='jomsom photo' 
   layout='fill'
    />
    
    </div>

    <div className={styles.images}>
  <Image src='/tours/pokhara4.jpg' alt='jomsom photo' 
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
