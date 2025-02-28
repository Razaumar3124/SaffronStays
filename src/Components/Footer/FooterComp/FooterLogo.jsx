import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import StraightIcon from '@mui/icons-material/Straight';

const FooterLogoContainer = styled.div`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2%;
    
    img {
        width: 50%;
        
        @media (min-width: 768px) { 
            width: 30%;
        }

        @media (min-width: 1024px) { 
            width: 20%;
        }
    }
`;

const FooterLogo = ({ img }) => (
    <FooterLogoContainer>
        <img src={img} alt="Footer Logo" />
        <Button variant="outlined" 
            sx={{ width: "2%", height: "60px", border: "1px solid white", borderRadius: "50%", color: "white" }}>
            <StraightIcon sx={{ fontSize: "2em" }} />
        </Button>
    </FooterLogoContainer>
);

export default FooterLogo;