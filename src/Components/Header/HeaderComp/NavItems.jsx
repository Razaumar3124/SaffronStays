import React from 'react';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom'; // Changed to NavLink

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Tours', path: '/tours' },
  { name: 'Prices', path: '/prices' }
];

const NavItems = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#1976d2' : 'inherit' // Example active color (MUI blue)
          })}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              '&:hover': {
                color: '#1976d2' // Hover color matches active color
              }
            }}
          >
            {item.name}
          </Typography>
        </NavLink>
      ))}
    </div>
  );
};

export default NavItems;