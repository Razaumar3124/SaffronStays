import React from 'react';
import styled from 'styled-components';

const FooterWrapperContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 3%;

    @media (max-width: 768px) { 
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const FooterWrapper = ({ children }) => (
    <FooterWrapperContainer>
        {children}
    </FooterWrapperContainer>
);

export default FooterWrapper;