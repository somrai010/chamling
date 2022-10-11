
import React, { useState } from "react";
import DrawerComp from "./Drawer";
import Link from 'next/link';


import styles from './sass/nav.module.scss'
import {BiDonateHeart} from 'react-icons/bi'

import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

const Header = () => {
  const [value, setValue] = useState('1');
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar elevation={0} >
        <Toolbar  className="wrapper">
          {/* <a href="/"><img src='/logo.png' alt='logo' className={styles.logo}/></a> */}
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
          {isMatch ? (
            <>
            
              <DrawerComp />
            </>
          ) : (
            <>


    <nav>
    
      <div className="content">
      <div className="logo">
      <Link href="/"><a ><img src='/logo.jpg' alt='logo' className={styles.logo}/></a></Link>
      </div>
        <ul className="links">

        <li><Link href="/about"><a>ABOUT</a></Link></li>
       


        <li>
            <Link href="#"><a  className="desktop-link">TOURS</a></Link>
          
         
            <ul>
              <li>
                <a href="#" className="desktop-link">Pokhara Day Biking Tours</a>
               <ul>
               <li>
                <Link href="/daytour/bamdi-short-cycling-tour" ><a className="desktop-link">Bamdi Short Cycling Tour </a></Link>
              </li>

              <li>
                <Link href="/daytour/biking-around-the-phewa-lake" ><a className="desktop-link">Biking Around The Phewa Lake </a></Link>
              </li>

              <li>
                <Link href="/daytour/sarangkot-bike-tour" ><a className="desktop-link">Sarangkot Bike Tour </a></Link>
              </li>

              <li>
                <Link href="/daytour/biking-tour-matikhan" ><a className="desktop-link">Biking tour at matikhan </a></Link>
              </li>
            

               </ul>
           
              </li>

              <li>
                <a href="#" className="desktop-link">Pokhara Multi Days Biking Tours</a>

                <ul>
                <li>
                <Link href="/multiday/two-day-pokhara-to-begnas" ><a className="desktop-link"> 2 Days Pokhara to Begnas Lake</a></Link>
                 </li>

                 <li>
                <Link href="/multiday/two-day-dhampus-to-australian-camp" ><a className="desktop-link"> 2 Days Dhampus to Australian</a></Link>
                 </li>
                  
                 <li>
                <Link href="/multiday/panchase-to-matikhan-tour" ><a className="desktop-link"> 3 Days Panchase to Matikhan</a></Link>
                 </li>

                 

                  



                </ul>
              </li>

              <li>
                <a href="#" className="desktop-link">Pokhara Explore Biking Tours</a>
              </li>
              <li>
                <Link href='/tours/jomsom-to-muktinath-tour'>
                <a className="desktop-link">Jomsom to Muktinath Biking Tours</a>
                </Link>
              </li>
              <li>
                <Link href="/tours/annapurna-circuit-biking-tours">
                <a  className="desktop-link">Annapurna Circuit Biking Tours</a>
                </Link>
              </li>
              <li>
                <a href="#" className="desktop-link">Upper Mustang Biking Tours</a>
              </li>

            
            

            </ul>
          </li>




          <li>
            <Link href="#"><a  className="desktop-link">CYCLES</a></Link>
          
         
            <ul>
              {/* <li>
                <a href="#" className="desktop-link">Projects</a>
    
                <ul>
                  <li><a href="/projects/education">sfsfs</a></li>
                  <li><a href="/projects/empowerment">fsfsfsf</a></li>
                  <li><a href="/projects/equality">sfsfsfs</a></li>
                </ul>
              </li> */}






              
              <li>
                <a href="#" className="desktop-link">Road Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">XC Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Endur Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">BMX Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Downhill Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Kids Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Electric Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Hybrid Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Folding Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Second Hand</a>
              </li>

            

            </ul>
          </li>
        



       


          <li><Link href="/parts"><a>PARTS</a></Link>
          
          <ul>
                  <li><a href="#">Handlebars And Stem</a></li>
                  <li><a href="#">Saddle And Seatpost</a></li>
                  <li><a href="#">Crankset And Toolbar</a></li>
                  <li><Link href="/"><a>Chain And Cassette</a></Link></li>
                  <li><Link href="/"><a>Chain And Cassette</a></Link></li>
                  <li><Link href="/"><a>Rearderailuer And Hanger</a></Link></li>
                  <li><Link href="/"><a>Chain And Cassette</a></Link></li>
                  <li><Link href="/"><a>Shifters And Grips</a></Link></li>
                  <li><Link href="/"><a>Front Derailleur</a></Link></li>
                  <li><Link href="/"><a>Seatpost Clamp</a></Link></li>
                  <li><Link href="/"><a>Hub Tire</a></Link></li>
                  <li><Link href="/"><a>Cycle Tubes</a></Link></li>
                  <li><Link href="/"><a>Spokes Suspension</a></Link></li>
                  <li><Link href="/"><a>Brake Lever</a></Link></li>
                 
                </ul>
          
          </li>


          <li><Link href="/"><a>ACCESSORIES</a></Link>
          <ul>
                  <li><Link href="/"><a>Pump & Light</a></Link></li>
                  <li><Link href="/"><a>Helmets</a></Link></li>
                  <li><Link href="/"><a>Bells</a></Link></li>
                  <li><Link href="/"><a>Tools</a></Link></li>
                  <li><Link href="/"><a>Bag</a></Link></li>
                  <li><Link href="/"><a>Glove</a></Link></li>
                  <li><Link href="/"><a>Mudguard & Bottle</a></Link></li>
                  <li><Link href="/"><a>Bottle Holder</a></Link></li>
                  <li><Link href="/"><a>Sunglasses</a></Link></li>
                  <li><Link href="/"><a>Phone Holders</a></Link></li>
                  
                </ul>
          
          </li>


          <li><Link href="/"><a>APPARELS</a></Link>
          
          <ul>
          <li><Link href="/"><a>Jersey</a></Link></li>
          <li><Link href="/"><a>Jackets</a></Link></li>
          <li><Link href="/"><a>Pants</a></Link></li>
          <li><Link href="/"><a>Gloves</a></Link></li>
          <li><Link href="/"><a>Shoes</a></Link></li>
          <li><Link href="/"><a>Socks</a></Link></li>
          <li><Link href="/"><a>Headbands</a></Link></li>
          <li><Link href="/"><a>T-Shirts</a></Link></li>

                </ul>
          
          </li>



          <li><Link href="/"><a> PROTECTORS</a></Link>
          
          <ul>
          <li><Link href="/"><a>Helmets</a></Link></li>
          <li><Link href="/"><a>Knee/Elbo Pads</a></Link></li>
          <li><Link href="/"><a>SunGlasses</a></Link></li>
          <li><Link href="/"><a>Body Armour</a></Link></li>
       

                </ul>
          </li>



          <li><Link href="/"><a> WORKSHOP</a></Link>
          <ul>
          <li><Link href="/"><a>Bike Clean</a></Link></li>
          <li><Link href="/"><a>Basic Service</a></Link></li>
          <li><Link href="/"><a>Full Service</a></Link></li>
          <li><Link href="/"><a>Suspension Service</a></Link></li>
          <li><Link href="/"><a>Rim Build</a></Link></li>
                </ul>
          </li>
          
          <li><Link href="/blogs"><a>BLOGS</a></Link></li>
          
        </ul>
      </div>
  
    </nav>



       



              {/* <Button href='/contact' className={styles.button} >
                Contact Us
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
<div className={styles.navcover}></div>

    </React.Fragment>
  );
};

export default Header;