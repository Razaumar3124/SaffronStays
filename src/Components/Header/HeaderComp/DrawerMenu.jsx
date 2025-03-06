import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TourIcon from '@mui/icons-material/EmojiTransportation';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const menuItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'About Us', icon: <InfoIcon /> },
  { text: 'Tours', icon: <TourIcon /> },
  { text: 'Prices', icon: <PriceCheckIcon /> },
  { text: 'Bookmark', icon: <BookmarkIcon /> }
];

const DrawerMenu = () => {
  return (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerMenu;
