import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Andaman from "../../../assets/HeroImg/andaman.png";
import Canada from "../../../assets/HeroImg/canada.png";
import ECoast from "../../../assets/HeroImg/ecoast.png";
import Konkan from "../../../assets/HeroImg/konkan.png";

const places = [
  { title: "Konkan", image: Konkan },
  { title: "E. Coast", image: ECoast },
  { title: "Canada", image: Canada },
  { title: "Andaman", image: Andaman },
];

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  width: '100%',
  height: '50vh',

  [theme.breakpoints.only('xs')]: {
    width: '48%',
    height: '280px',
  },
  [theme.breakpoints.only('sm')]: {
    width: '41%',
    height: '370px',
  },
  [theme.breakpoints.only('md')]: {
    width: '22.3%',
    height: '350px',
  },
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

const HeroCard = () => {
  return (
    <>
      {places.slice(0, 4).map((place, index) => (
        <StyledCard 
          key={index}
          style={{ backgroundImage: `url(${place.image})` }}
        >
          <LocationTag>
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2" fontWeight="bold">
              {place.title}
            </Typography>
          </LocationTag>
        </StyledCard>
      ))}
    </>
  );
};

export default HeroCard;