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
    <title>Annapurna Circuit Biking Tours</title>
    <meta name="description" content="
Annapurna Circuit Cycling is Another world high 5416m Altitude Thorongla Pass Adventure expeditions and challenging Mountain Bike Tours packages. Riders say that if the cyclists pass this Thorongla then those riders and pass the any challenging event of biking. Thousands of riders and hikers came to Nepal only for Thorongla pass.
" />
    <meta name='keywords' content="annapurna circuit biking tours" />
   
    <meta property="og:image" content="/tours/annapurna1.jpg" />
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
<h1>Annapurna Circuit Biking Tours</h1>
<p>A perfect tour in Pokhara for adventure lovers!</p>
<p>

Annapurna Circuit Cycling is Another world high 5416m Altitude Thorongla Pass Adventure expeditions and challenging Mountain Bike Tours packages. Riders say that if the cyclists pass this Thorongla then those riders and pass the any challenging event of biking. Thousands of riders and hikers came to Nepal only for Thorongla pass.
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>
        Day 1: After breakfast drive on Jeep to Besishahar. And then ride a bike from Beshisahar to Jagat around 25km which is totally uphill, between the forest, village and then after reached at Jagat. We will stay there our first night.
        </li>
    <li><span><FaLongArrowAltRight/></span>
    Day 2: Biking from Jagat to Dharapani. Same after finished breakfast<br/>
    Leave Jagat pedaling 28km on a jeep trails with beautiful views of waterfalls and forest and village. At some point might have to push bike. Here also will ride more up hills as we are heading to the Mountains.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 3: Cycling from Dharapani to Chame approx 15km, will witness beautiful riverbed villages, suspension bridges, apple farms, water fall and challenging uphill trails. After arrival in Chame the amazing views will take your breath away and not only that it is headquarter of Manang district.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 4: Again bicycling from Chame to Manang which is around 35km. And we will be pedaling surrounding with same kind of beautiful views on the way. When we arrive at Humde airport which is high commercial airport in the world. There we will have a lunch. And again head towards Manang.
 
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 5: Relax and Rest day in Manang.<br/>
 That day is rest day but we will do some other activities like visit around villages and hiking to surrounding hills for photos and see different peoples life style. Visit Gangapurna lake which is glacial lake.
 
 </li>




 <li><span><FaLongArrowAltRight/></span>
 Day 6: We will pedal from Manang to Phedi which is 21km approx. Again will be heading towardsnThorong Phedi,which lies just at the bottom of Thorong-La. It is the most challenging section than past days. Where we will pull,push and ride like a yak.
 </li>


 <li><span><FaLongArrowAltRight/></span>
 Day 7: Ride, Push and bike ride Phedi to Muktinath just 22km.That is the biggest and challenging day of our trips we will pass the Throng-La (5416m). Which is not an easy track but take it easy. Push or carry bike heartily strong and when you will reach the world highest biking Himalayan trail 
 Thorang-La pass. You will not forget that moment in your life till you die. After the pass, ride down to the Muktinath.
 </li>



 <li><span><FaLongArrowAltRight/></span>
 Day 8: We will have breakfast at 7:30 am and then ride down to Marpha 30km. It is the Buddha religion place and famous for apple farms.
 </li>



 <li><span><FaLongArrowAltRight/></span>
 Day 9: Ride to Tatopani (hot spring water) which is 40km downhill. We take a steam of hot water which is a best meditation for body and enjoy the last night of biking trips at Tatopani.
 </li>



 <li><span><FaLongArrowAltRight/></span>
 Day 10: Ride down 24km to Beni and come to Pokhara by jeep.
 </li>



    </ul>
</div>

<div className={styles.images}>
  
<Image src="/tours/annapurna1.jpg" alt='annapurna photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  <Image src='/tours/annapurna2.jpg' alt='annapurna photo' 
   layout='fill'
    />
    
    </div>

    <div className={styles.images}>
  <Image src='/tours/annapurna3.jpg' alt='annapurna photo' 
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
