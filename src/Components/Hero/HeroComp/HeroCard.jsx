import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  width: '100%',
  height: '50vh', // Default height

  // Mobile view (xs)
  [theme.breakpoints.only('xs')]: {
    width: '48%',
    height: '280px',
  },

  // Tablet view (sm)
  [theme.breakpoints.only('sm')]: {
    width: '41%',
    height: '370px',
  },

  // Laptop view (md)
  [theme.breakpoints.only('md')]: {
    width: '22.3%',
    height: '350px',
  },

  // Larger screens (lg)
  [theme.breakpoints.up('lg')]: {
    width: '23%',
    height: '430px',
  },
}));

const LocationTag = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#fff',
  padding: '8px 12px',
  borderRadius: '20px',
  position: 'absolute',
  top: '16px',
  right: '16px',
  boxShadow: theme.shadows[2],
}));

const HeroCard = ({ imageUrl, location }) => {
  return (
    <StyledCard style={{ backgroundImage: `url(${imageUrl})` }}>
      <LocationTag>
        <LocationOnIcon fontSize="small" />
        <Typography variant="body2" fontWeight="bold">
          {location}
        </Typography>
      </LocationTag>
    </StyledCard>
  );
};

export default HeroCard;