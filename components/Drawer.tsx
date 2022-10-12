
import React, { useState } from "react";
import Link from 'next/link';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';

import styles from './sass/drawer.module.scss';



import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


const [opentour,setOpentour]=useState(false);
const [daytour,setDaytour]=useState(false);
const [multidaytour,setMultidaytour]=useState(false);















  return (
    <React.Fragment>
<div className={styles.mview} id='nav' >


 <div className={styles.logo}>
 <Link href='/'><a>
            
          <img src='/logo.jpg' alt='logo' className={styles.logo}/>
          </a></Link>
  </div>

<div className={styles.dcontainer}>

      <Drawer
      className={styles.drawer}
       
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: { width: "80%",padding:"20px",backgroundColor:"rgb(27,27,27)"
          },
          }}
      >
<div className={styles.list}>
<ul>
  <li><Link href='/about'><a>About Us</a></Link></li>
  <li><Link href='/'><a onClick={(e)=> setOpentour(!opentour)}>Tours{!opentour &&<span><MdKeyboardArrowDown/></span>}{opentour &&<span><MdKeyboardArrowUp/></span>}</a></Link>
  
 {opentour && <ul>
              <li>
                <a href="#" className="desktop-link" onClick={(e)=> setDaytour(!daytour)} >Pokhara Day Biking Tours {!daytour &&<span><MdKeyboardArrowDown/></span>}{daytour &&<span><MdKeyboardArrowUp/></span>}</a>
               {daytour &&<ul>
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
            

               </ul>}
           
              </li>

              <li>
                <a href="#" className="desktop-link" onClick={()=>setMultidaytour(!multidaytour)}>Pokhara Multi Days Biking Tours{!multidaytour &&<span><MdKeyboardArrowDown/></span>}{multidaytour &&<span><MdKeyboardArrowUp/></span>}</a>

                {multidaytour &&<ul>
                  <li>
                  <Link href='/multiday/two-day-pokhara-to-begnas'><a className="desktop-link"> 2 Days Pokhara to Begnas Lake </a></Link>
                  </li>

                  <li>
                  <Link href="/multiday/two-day-dhampus-to-australian-camp"><a  className="desktop-link"> 2 Days Dhampus to Australian Camp </a></Link>
                  </li>

                  <li>
                  <Link href="/multiday/panchase-to-muktinath-tour"></Link><a className="desktop-link"> 3 Days Panchase to Matikhan  </a>
                  </li>



                </ul>}
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
              <Link href="/tours/upper-mustang-tour">
                <a  className="desktop-link">Upper Mustang Biking Tours</a>
                </Link>
                </li>

            
            

            </ul>}
  
  </li>
 
 
 
  <li><Link href='/'><a>Cycles</a></Link></li>

  <li><Link href='/'><a>Parts</a></Link></li>
  <li><Link href='/'><a>Accessories</a></Link></li>
  <li><Link href='/'><a>Apparels</a></Link></li>

  <li><Link href='/'><a>Protectors</a></Link></li>
  <li><Link href='/'><a>Workshop</a></Link></li>
  <li><Link href='/'><a>Blogs</a></Link></li>
</ul>

</div>




      </Drawer>
      <IconButton
        sx={{ fontSize:'large',}}
        onClick={() => setOpenDrawer(!openDrawer)}
        
      >
        <MenuIcon sx={{ transform: "scale(1.5)", color:"black",marginTop:"10px"}}/>
      </IconButton>


      </div>
  </div>
    </React.Fragment>
  );
};

export default DrawerComp;