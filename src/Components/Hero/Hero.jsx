import React from 'react';
import { styled } from '@mui/material/styles';
import Title from './HeroComp/Title';
import HeroCard from './HeroComp/HeroCard';
import img from "../../assets/HeroImg/tents-n-trails.jpg"
import Nordic from './HeroComp/Nordic';
import HeroSecMainCard from './HeroComp/HeroSecMainCard';
import Socials from './HeroComp/Socials';

const ResponsiveContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0 2%',
  gap: '10px', // Default gap for mobile

  // Tablet view (sm)
  [theme.breakpoints.up('xs')]: {
    justifyContent: "center",
  },

  [theme.breakpoints.up('sm')]: {
    gap: "30px",
    justifyContent: "center"
  },

  // Laptop view (md)
  [theme.breakpoints.up('md')]: {
    justifyContent: "space-between"
  },

  // Offset for even cards (only in laptop view and above)
  [theme.breakpoints.up("md")]: {
    '& > *:nth-of-type(2n)': {
      marginTop: '40px',
    },
  },
}));


const Hero = () => {
  return (
    <>
    <HeroSecMainCard/>
    <Title props="Discover the Touch of Nature"/>
    <ResponsiveContainer>
      <HeroCard imageUrl={img} location="aurangabad" />
      <HeroCard imageUrl={img} location="aurangabad" />
      <HeroCard imageUrl={img} location="aurangabad" />
      <HeroCard imageUrl={img} location="aurangabad" />
    </ResponsiveContainer>
    <Title props="Nordic Sea - Best for June 2025"/>
    <Nordic />
    <Title props="New Destinations"/>
    <Socials />
    </>  
  )
}

export default Hero