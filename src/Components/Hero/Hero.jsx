import { Typography, Box, Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroimg from "../../assets/HeroImg/hero2.jpg"

const AnimatedContainer = styled('div')`
  width: 100vw;
  height: 80vh;
  border-radius: 10px; /* Mobile view */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleContainer 10s ease-in-out infinite alternate;

  background: url(${heroimg}) center/cover no-repeat;

  @keyframes scaleContainer {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05); /* Slight zoom effect */
    }
  }

  /* Tablet view (768px and up) */
  @media (min-width: 768px) {
    width: 99vw;
    height: 85vh;
    border-radius: 20px;
  }

  /* Laptop view (1024px and up) */
  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    border-radius: 10px;
  }
`;

const Hero = () => {
  return (
    <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ position: 'relative' }}>
          <Card sx={{ boxShadow: 'none' }}>
            <AnimatedContainer />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '20%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3" fontWeight="normal" color="black">
                {/* Gear up for Great Outdoors® */}
                GEAR UP FOR GREAT OUTDOORS®
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero