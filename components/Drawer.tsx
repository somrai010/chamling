import React, { useState } from "react";
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
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: { width: "70%" },
          }}
      >
        <List>
      
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Blogs</ListItemText>
              </ListItemIcon>
            </ListItemButton>
     
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Services</ListItemText>
              </ListItemIcon>
            </ListItemButton>


    
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;