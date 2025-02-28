import React from 'react';
import styled from 'styled-components';

const FooterContainerWrapper = styled.div`
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

const FooterContainer = ({ title, children }) => (
    <FooterContainerWrapper>
        <h1>{title}</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {children}
        </div>
    </FooterContainerWrapper>
);

export default FooterContainer;