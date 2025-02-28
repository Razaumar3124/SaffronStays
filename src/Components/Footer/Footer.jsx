import React from 'react';
import styled from 'styled-components';
import FooterLogo from './FooterComp/FooterLogo';
import FooterContainer from './FooterComp/FooterContainerWrapper';
import FooterWrapper from './FooterComp/FooterWrapper';
import cornerImg from '../../assets/footerImg/footerBelowImg.png';
import img from '../../assets/footerImg/footer.png';

const MainFooterContainer = styled.div`
    min-height: 40vh;
    border: 2px solid;
    padding: 10% 3%;
    background-color: #272727;
    position: relative;

    @media (min-width: 768px) { 
        padding: 4% 3%;
    }

    @media (min-width: 1024px) { 
        padding: 5% 3%;
    }
`;

const BottomRightImage = styled.img`
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 300px;
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

const Footer = () => (
    <MainFooterContainer>
        <FooterLogo img={img} />
        <FooterWrapper>
            <FooterContainer title="Company">
                <div>Home</div>
                <div>About us</div>
                <div>Tours</div>
                <div>Careers</div>
            </FooterContainer>
            <FooterContainer title="Contact">
                <div>+91 9876543210</div>
                <div>info@saffronstays.com</div>
                <div>support@saffronstays.com</div>
            </FooterContainer>
        </FooterWrapper>
        <BottomRightImage src={cornerImg} alt="Decorative Element" />
    </MainFooterContainer>
);

export default Footer;
