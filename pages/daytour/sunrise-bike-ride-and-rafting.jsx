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
          content="
          In this sunrise cycling and rafting trip. It is the short 
          day adventures packaging for Expedition lovers. So we cover
           all the places in one trip for much fun. Which is easy and short everybody can join"
        />
        <meta name="keywords" content=" sunrise bike ride and rafting tour" />

        <meta property="og:image" content="/sunrise/1.jpg" />
        <link rel="icon" href="/logo1.jpg" />

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
            In this sunrise cycling and rafting trip. It is the short day
            adventures packaging for Expedition lovers. So we cover all the
            places in one trip for much fun. Which is easy and short everybody
            can join
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
                  Start early in the morning at 5:00 am. for sunrise. Ride the
                  bike hotel to the cable car station. From Lake it will be
                  about 10 to 15 minutes. Cable car to Sarangkot by cable care
                  drive 10 minutes with bikes walk to the view point for
                  Sunrise. There we will be 30 minutes and also have a light
                  breakfast at Sarangkot.
                </li>
                <li>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  After few minutes of breakfast we will ride 1 hour 40 minutes
                  of the point of Rafting start. Rafting. And then yours Upper
                  Seti Rafting will be 40 minutes till Yamdi where will be end
                  rafting and have again light lunch and from Yamdi back to the
                  Pokhara by jeep.
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
