import React from "react";
import Head from "next/head";
import Image from "next/image";

import Nav from "../../components/Nav";
import Navdetails from "../../components/Navdetails";
import Footer from "../../components/Footer";

import styles from "./sass/daytour.module.scss";

import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdOutgoingMail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import { Rating } from "@mui/material";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Sunrise, Bike Ride and Rafting</title>
        <meta
          name="description"
          content="In this sunrise cycling and rafting trip. It is it is packaging adventure 
          tour So that we cover all the places in one trip for much fun. Which is also easy
           and short expedition in one day."
        />
        <meta name="keywords" content=" sunrise bike ride and rafting tour" />

        <meta property="og:image" content="/sunrise/3.jpg" />
        <link rel="icon" href="/logo.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bungee&family=Fira+Sans+Condensed&family=Roboto:wght@300&family=Tapestry&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <Nav />
        <Navdetails />
      </div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1> Sunrise, Bike Ride and Rafting</h1>
          <p>A perfect day tour in Pokhara for adventure lovers!</p>
          <p>
            In this sunrise cycling and rafting trip. It is it is packaging
            adventure tour So that we cover all the places in one trip for much
            fun. Which is also easy and short expedition in one day.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.contents}>
            <div className={styles.points}>
              <h4>Itineraries</h4>
              <ul>
                <li>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  Starting a trip wake up in the morning 5:00 a.m. write the
                  bike from your hotel to cable car station.
                </li>
                <li>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  Cable car to sarangkot drive 10 minutes with bike and get to
                  the view point for sunrise. There we will be 30 minutes and
                  also eat lunch at Sarangkot.
                </li>

                <li>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  After few minutes of breakfast we will ride 1hour 30 minutes
                  of the rafting start point. Which is 30 kms
                </li>

                <li>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  And then yours Upper Seti Rafting will be 40 minutes till
                  Yamdi where will be end rafting and have a light lunch and
                  Yamdi then back to the Pokhara
                </li>
              </ul>
            </div>

            <div className={styles.images}>
              <Image
                src="/sunrise/3.jpg"
                alt="Phewa lake biking photo"
                layout="fill"
              />
            </div>
            <div className={styles.images}>
              <Image
                src="/sunrise/1.jpg"
                alt="Phewa lake biking photo"
                layout="fill"
              />
            </div>
            <div className={styles.images}>
              <Image
                src="/sunrise/4.jpg"
                alt="Phewa lake biking photo"
                layout="fill"
              />
            </div>
            <div className={styles.images}>
              <Image
                src="/sunrise/5.jpg"
                alt="Phewa lake biking photo"
                layout="fill"
              />
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <h4>For The Best Package Price:</h4>
              {/* <h5><span><GoPerson/></span> Som Rai</h5> */}
              <h5>
                <span>
                  <BsFillTelephoneFill />
                </span>{" "}
                +977- 9817172160
              </h5>
              <h5>
                <span>
                  <MdEmail />
                </span>{" "}
                chamlingcycle@gmail.com
              </h5>
            </div>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g293891-d7907590-Reviews-Chamling_Cycle_Pvt_Ltd-Pokhara_Gandaki_Zone_Western_Region.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.contact}>
                <h2>
                  <FaTripadvisor />
                </h2>
                <h2>
                  trip<strong>advisor</strong>
                </h2>
                <h2>
                  <Rating
                    name="read-only"
                    value={4.5}
                    readOnly
                    precision={0.5}
                  />
                </h2>
                <p>One Of The Best In Pokhara</p>

                {/* <img src='/tours/tripadvisor.jpeg' alt='tripadvisor'/> */}
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
