import React from 'react';
import styled from 'styled-components';
import img from "../../assets/footerImg/footer.png";
import cornerImg from "../../assets/footerImg/footerBelowImg.png"; // Add your new image here
import { Button } from '@mui/material';
import StraightIcon from '@mui/icons-material/Straight';

const MainFooter = styled.div`
    min-height: 40vh;
    border: 2px solid;
    padding: 10% 3%;
    background-color: #272727;
    position: relative; /* Added to allow absolute positioning inside */
    
    @media (min-width: 768px) { 
        padding: 4% 3%;
    }

    @media (min-width: 1024px) { 
        padding: 5% 3%;
    }
`;

const Footerlogo = styled.div`
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

const Footercontainer = styled.div`
  height: 22vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  font-weight: bold;
  color: white;

  @media (min-width: 768px) {
      width: 48%;
  }

  @media (min-width: 1024px) {
      width: 20%;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 3%;

  @media (max-width: 768px) { 
      flex-wrap: wrap;
      justify-content: space-between;
  }
`;

const BottomRightImage = styled.img`
    position: absolute;
    bottom: 0px; /* Adjust as needed */
    right: 0px; /* Adjust as needed */
    width: 300px; /* Adjust size */
    height: 80px;

    @media (min-width: 768px) {
        width: 400px;
        height: 70px;
    }

    @media (min-width: 1024px) {
        width: 600px;
        height: 110px;
    }
`;

const Footer = () => {
  return (
    <MainFooter>
        <Footerlogo>
          <img src={img} alt="Footer Logo" />
          <Button variant="outlined" 
          sx={{width: "2%",height: "60px", border: "1px solid white",borderRadius: "50%",color: "white"}}
          >
            <StraightIcon sx={{fontSize: "2em"}}/>
          </Button>
        </Footerlogo>
        <FooterWrapper>
          <Footercontainer>
            <h1>Company</h1>
            <div style={{display: "flex",flexDirection: "column", gap: "4px"}}>
              <div>Home</div>
              <div>About us</div>
              <div>Tours</div>
              <div>Careers</div>
            </div>
          </Footercontainer>
          <Footercontainer>
            <h1>Contact</h1>
            <div style={{display: "flex",flexDirection: "column", gap: "6px"}}>
              <div>+91 9876543210</div>
              <div>info@saffronstays.com</div>
              <div>support@saffronstays.com</div>
            </div>
          </Footercontainer>
        </FooterWrapper>

        {/* Bottom right image */}
        <BottomRightImage src={cornerImg} alt="Decorative Element" />
    </MainFooter>
  );
};

export default Footer;
