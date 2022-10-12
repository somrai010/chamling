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
    <title>Upper Mustang Biking Tour</title>
    <meta name="description" content="
Upper Mustang is a restricted place to visit for foreigners so, they need a special permit to enter the
forbidden kingdom. The riding trails are simply awesome with unique landscapes plus the mountains on
the backdrop. Many ancient monasteries welcomes the visitors on the way. The existence of King in Lo-
Manthang is unique on its own.
" />
    <meta name='keywords' content="upper mustang tour" />
   
    <meta property="og:image" content="/tours/mustang1.jpg" />
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
<h1>Upper Mustang Biking Tour</h1>
<p>A perfect tour in Pokhara for adventure lovers!</p>
<p>

Upper Mustang is a restricted place to visit for foreigners so, they need a special permit to enter the
forbidden kingdom. The riding trails are simply awesome with unique landscapes plus the mountains on
the backdrop. Many ancient monasteries welcomes the visitors on the way. The existence of King in Lo-
Manthang is unique on its own.
</p>
    </div>
    <div className={styles.body}>
<div className={styles.contents}>

<div className={styles.points}>
    <h4>Itineraries</h4>
    <ul>
        <li><span><FaLongArrowAltRight/></span>
        Day 1: Arrive to Airport by taxi early morning 5am or 6am depend on flight ticket time. Fly to
Jomsom and have a breakfast at Jomsom. After breakfast ride 10 km to Kagbeni and stay one
night at Kagbeni.
        </li>
    <li><span><FaLongArrowAltRight/></span>
    
    Day 2: After breakfast start ride to Muktinath 14km totally uphill. And after the lunch at Muktinath .We
go to Mukthinath Temple. It has 108 tapes and located at 3760m high. So second night we will stay
in Muktinath.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 3: Muktinath to Chaile .Distance around: 20Km biking.That day will be our enter section of our
Upper Mustang Trips and uphill pedal to the Gyu La pass to Chusang and we will eat lunch and
stay that night at Chaile .
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 4:Chaile 3045m to Syangboche 3810m. Around distance 23km cycling. Heading to Samar some
time push and pedaling on the uphill. After some hours we will reach to Sumer where we will stop for
lunch and after lunch again heading to Syangboche and then when reached in Syangboche. If there
will time. We will visit at villages and stay there that night.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 5:Syangboche 3750m to Charang 3550m.Distance: 25 km, riding. That day will really different
filling because after the 2, 3 passes and climbed. We will see beautiful Nilgiri Annapurna Himalaya
and Mustang views. After that when we will reach in Ghami. We will have a lunch there and ride
down single track to Charang and relax a day.
 
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 6:Charang 3562m to Lo-Manthang 3800m. 22Km around .That day we will finally reach our
mission of Lo-Manthang, this is walled city of Buddhist heritage. It will easy ride . In this areas
Himalayan landscape and views are amazing and there are some 360 degree views points where
we can we take pictures . We will be on jeep track and some single track. After the pass we will reach to
Lo-Manthang. And then we will take lunch in hotel and relax for the rest of the day.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 7: We will take rest for ride but we will go to Lo-Manthang surrounding for visite are as centuries
old Gumba, Royal Palace, inhabited caves, museum and ancient Buddhist ways of life. We may
even get the chance to meet the traditional King and Queen of the region. It is the best part of our
biking trip.
 </li>

 <li><span><FaLongArrowAltRight/></span>
 Day 8: After our breakfast Lo-Manthang to Ghami distance: 35Km riding down and asslo single-
track. After while we pass over 4300 meters, look back up the Mustang Valley with some amazing
beauty views. Lunch we will have on the way of ghami and ride to direct Ghumi and relax in hotel.
</li>

<li><span><FaLongArrowAltRight/></span>
Day 9:Ghami to Samar same after break fast. We will biking 35 Km. Just going down to down and
after some of hours we will reach to Sumer and take relaxy.
</li>

<li><span><FaLongArrowAltRight/></span>
Day 10:Samar to Marpha : 35km riding. Days 10 also just totally going down by passing Chele,
Kagbeni and Jomsom. In Jomsom we will stop bike an hour for lunch and again heading to Marpha.
</li>

<li><span><FaLongArrowAltRight/></span>
Day 11: Marpha to Tatopani (hot spring water) 40km downhill. Stay at Hot Spring water and hotel
and injoy the last night of biking trips.
</li>

<li><span><FaLongArrowAltRight/></span>
Day 12: After breakfast Tatopani to Beni then Drive to Pokhara.
</li>
    </ul>
</div>
<div className={styles.price}>

    <p style={{marginTop:"50px"}}>
    <b>Price:</b> ……$ per person for Plane ticket, Airport tax , Tims and Permit (ACAP), Transportation
(taxi for airport and jeep for Beni to Pokhara), professional guide with mechanic skill. XC bike or full
suspension (for full suspension bike cost will high), accommodation (room bed) and meals
(breakfast, lunch and dinner.

    </p>
</div>

<div className={styles.images}>
  
<Image src="/tours/mustang1.jpg" alt='jomsom photo' 
     
     layout='fill'
      />


  
  </div>
  <div className={styles.images}>
  <Image src='/tours/mustang2.jpg' alt='jomsom photo' 
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
