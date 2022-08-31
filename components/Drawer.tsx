
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
      
         
{/* <hr/> */}
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/about'><a>About Us</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Cycles</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>


            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Tours</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Parts</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Accessories</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Apparels</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>


            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Protectors</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Workshop</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Blogs</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", fontSize:'large',}}
        onClick={() => setOpenDrawer(!openDrawer)}
        className={styles.toggler}
      >
        <MenuIcon sx={{ transform: "scale(1.4)"}}/>
      </IconButton>


      </div>

    </React.Fragment>
  );
};

export default DrawerComp;