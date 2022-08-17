
import React, { useState } from "react";
import Link from 'next/link';

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

  return (
    <React.Fragment>
      <div className="logo"><Link href='/'><a ><img src='/logo.jpg' alt='logo' /></a></Link></div>

<div >
      <Drawer
      className={styles.drawer}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: { width: "70%",padding:"20px"
          },
          }}
      >
        <List className={styles.list}>
      
            <ListItemButton>
              <ListItemIcon>
                <ListItemText className={styles.text}><Link href='/donate-us'><a className={styles.donate} >Donate Us</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
{/* <hr/> */}
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/contact'><a>Contact Us</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/aboutus'><a>About Us</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/leadership'><a>Our Team</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/affilation'><a>Affilation</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/partners'><a>Partners</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/map'><a>Our Location</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>


            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/stories'><a>Stories</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/updates'><a>News/Updates</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/publications'><a>Publications</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>


            
      <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/be-volunteer'><a>Be Volunteer</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>


            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/work-with-us'><a>Work With Us</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
        

<ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/projects'><a>Projects</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>


            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/events'><a>Events</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
    
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/humanitarian-act'><a>Humanitarian Act</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>




        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" , fontSize:'large',}}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ transform: "scale(1.4)" }}/>
      </IconButton>


      </div>

    </React.Fragment>
  );
};

export default DrawerComp;