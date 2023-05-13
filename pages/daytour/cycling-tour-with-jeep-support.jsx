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
        <title>Cycling Tour with Jeep support</title>
        <meta
          name="description"
          content="Day Jeep support Downhill Cycling Tours will be 3 places first  will be sunrise in Sarangkot and second will be mattiKhan and then last will be world peace pakoda."
        />
        <meta
          name="keywords"
          content="biking around the phewa lake, phewa lake tour, pokhara day tour with cycle support,phewa lake biking tour provider"
        />

        <meta property="og:image" content="/1/1.jpg" />
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
          <h1> Cycling Tour with Jeep support</h1>
          <p>A perfect day tour in Pokhara for adventure lovers!</p>
          <p>
            Day Jeep support Downhill Cycling Tours will be 3 places first will
            be sunrise in Sarangkot and second will be mattiKhan and then last
            will be world peace pakoda
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
                  Wake up in the morning 5:00 a.m. And get ready for your jeep.
                  And then jeep will pick up from your hotel and drop to the
                  cable car station. By cable car you will drive about 10
                  minutes and 2.2 km to the Sarangkot for Sunrise.
                </li>
                <li>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  At the top of the Sarangkot we will see sunrise and Himalayan
                  range about 30 minutes and have a breakfast and then ride to
                  Deurali 30 minutes. There you see Himalayans very close of
                  you. And ride down to khapaudi about 10kms. From Khapaudi
                  again jeep will pick up and drive to top of the Matikhan about
                  35 minutes. And get down 10 kms. to the Phusre khola.
                </li>

                <li>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  From Phusre khola again the jeep will pick up and drop to
                  World Peace Stupa. There we will have lunch and ride
                  singletrack down hill into the jungle. It will also 30 minutes
                  ride but we will do it twice. And then back to the bike shop
                  or your hotel.
                </li>
              </ul>
            </div>

            <div className={styles.images}>
              <Image src="/1/1.jpg" alt="jeep support tour" layout="fill" />
            </div>
            <div className={styles.images}>
              <Image
                src="/1/2.jpg"
                alt="Phewa lake biking photo"
                layout="fill"
              />
            </div>
            <div className={styles.images}>
              <Image
                src="/1/3.jpg"
                alt="Phewa lake biking photo"
                layout="fill"
              />
            </div>
            <div className={styles.images}>
              <Image
                src="/1/4.jpg"
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
