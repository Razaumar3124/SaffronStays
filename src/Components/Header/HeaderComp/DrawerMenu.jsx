import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const menuItems = ['Home', 'About Us', 'Tours', 'Prices', 'Bookmark'];

const DrawerMenu = () => {
  return (
    <List>
      {menuItems.map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerMenu;