
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
      <input type="checkbox" id="show-search"/>
      <input type="checkbox" id="show-menu"/>
      <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
      <div className="content">
      <div className="logo">
      <Link href="/"><a ><img src='/logo.jpg' alt='logo' className={styles.logo}/></a></Link>
      </div>
        <ul className="links">
       
       
          <li>
            <Link href="#"><a  className="desktop-link">CYCLES</a></Link>
          
         
            <ul>
              <li>
                <a href="#" className="desktop-link">Projects</a>
    
                <ul>
                  <li><a href="/projects/education">sfsfs</a></li>
                  <li><a href="/projects/empowerment">fsfsfsf</a></li>
                  <li><a href="/projects/equality">sfsfsfs</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="desktop-link">Road Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">XC Bikes</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Endu Bikes</a>
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
        



          <li>
            <Link href="#"><a  className="desktop-link">TOURS</a></Link>
          
         
            <ul>
              <li>
                <a href="#" className="desktop-link">Pokhara Day Tours</a>
               
           
              </li>
              <li>
                <a href="#" className="desktop-link">Mustang Tours</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Pokhara Multi Days Tours</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Classic Tours</a>
              </li>
              <li>
                <a href="#" className="desktop-link">Multi Adventures Tours</a>
              </li>

            

            </ul>
          </li>




          <li><Link href="/blogs"><a>BLOGS</a></Link></li>
         
        </ul>
      </div>
  
    </nav>



       



              <Button href='/contact' className={styles.button} >
                Contact Us
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
<div className={styles.navcover}></div>

    </React.Fragment>
  );
};

export default Header;