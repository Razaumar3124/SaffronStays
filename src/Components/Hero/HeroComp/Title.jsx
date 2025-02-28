import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  height: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3%;

  p {
    font-size: 1.2em; /* Default for mobile */

    @media (min-width: 768px) { /* Tablet */
      font-size: 1.5em;
    }

    @media (min-width: 1024px) { /* Laptop */
      font-size: 2em;
    }
  }
`;

const Title = ({props}) => {
  return (
    <TitleContainer>
      <p>{props}</p>
      <Box
      sx={{
        background: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))`,
        height: "2px",
        width: "30%",
       }}
       />
    </TitleContainer>
  );
}

export default Title;
