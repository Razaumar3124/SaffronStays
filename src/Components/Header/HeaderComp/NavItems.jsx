import React from 'react';
import { Typography } from '@mui/material';

const menuItems = ['Home', 'About Us', 'Tours', 'Prices'];

const NavItems = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {menuItems.map((item) => (
        <Typography key={item} variant="body1" style={{ fontWeight: 'bold', cursor: 'pointer' }}>
          {item}
        </Typography>
      ))}
    </div>
  );
};

export default NavItems;