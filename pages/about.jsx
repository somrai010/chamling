import React from 'react';
import Head from 'next/head';
import styles from '../sass/about.module.scss';
import Template from '../components/template/Template';
import Nav from '../components/Nav';

export default function About() {
  return (
    <div className={styles.about}>


<Head>
        <title>About us Chamling Cycle Pokhara</title>
        <meta name="description" content="The bike shop in Pokhara, Nepal. Chamling Company is Running Adventures Cycling Tours / Trips.
         Aslo MTB Rides, Sale, Rental & Bicycles Maintenance. 
         And giving much better services to customers. Not only 
         that our team all born for cycling / MTB. We have more than 10 years 
         experience guides mechanics and riders staffs. And also the founder
          self 15 years experienced in Mountain Biking in all sectors." />
        <link rel="icon" href="/logo1.jpg" />
        <meta property="og:image" content='/about1.jpg' />


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Fira+Sans+Condensed&family=Roboto:wght@300&family=Tapestry&display=swap" rel="stylesheet"/> 
     </Head>

  <Template>
    
    <div className={styles.aboutc}>

        <p>The bike shop in Pokhara, Nepal. Chamling Company is Running Adventures Cycling Tours / Trips. Aslo MTB Rides, Sale, Rental & Bicycles Maintenance. And giving much better services to customers. Not only that our team all born for cycling / MTB. We have more than 10 years experience guides mechanics and riders staffs. And also the founder self 15 years experienced in Mountain Biking in all sectors.</p>
    </div>
    
    </Template>  

    </div>
  )
}
