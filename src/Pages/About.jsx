import React, { useEffect, useRef } from 'react';
import ecoast from "../assets/HeroImg/ecoast.png"
import profile1 from "../assets/AboutImg/profile1.jpg";
import profile2 from "../assets/AboutImg/profile2.jpg";
import profile3 from "../assets/AboutImg/profile3.webp";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const whyUsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) gsap.from(heroRef.current, { opacity: 0, duration: 1.5, ease: 'power3.out' });
    if (headingRef.current) gsap.from(headingRef.current, { opacity: 0, y: -50, duration: 1, ease: 'power4.out', delay: 0.5 });
    if (subheadingRef.current) gsap.from(subheadingRef.current, { opacity: 0, y: 30, duration: 1, ease: 'power4.out', delay: 0.8 });
    if (storyRef.current) gsap.from(storyRef.current.children, { opacity: 0, y: 50, stagger: 0.2, duration: 1, scrollTrigger: { trigger: storyRef.current, start: 'top 80%' } });
    if (missionRef.current) gsap.from(missionRef.current.children, { opacity: 0, x: -50, stagger: 0.2, duration: 1, scrollTrigger: { trigger: missionRef.current, start: 'top 80%' } });
    if (teamRef.current) gsap.from(teamRef.current.children, { opacity: 0, scale: 0.9, stagger: 0.2, duration: 1, scrollTrigger: { trigger: teamRef.current, start: 'top 80%' } });
    if (whyUsRef.current) gsap.from(whyUsRef.current.children, { opacity: 0, y: 30, stagger: 0.2, duration: 1, scrollTrigger: { trigger: whyUsRef.current, start: 'top 80%' } });
    if (ctaRef.current) gsap.from(ctaRef.current.children, { opacity: 0, y: 50, stagger: 0.2, duration: 1, scrollTrigger: { trigger: ctaRef.current, start: 'top 90%' } });
  }, []);

  const teamMembers = [
    { name: 'John Doe', role: 'Founder', image: `${profile1}` },
    { name: 'Jane Smith', role: 'Travel Expert', image: `${profile2}` },
    { name: 'Mike Johnson', role: 'Tour Manager', image: `${profile3}` }
  ];

  const whyChooseUs = [
    { title: 'Expert Guides', desc: 'Local experts with deep knowledge', icon: '🧭' },
    { title: 'Custom Journeys', desc: 'Tailored to your dreams', icon: '✨' },
    { title: '24/7 Care', desc: 'Support whenever you need', icon: '📞' }
  ];

  const journeyMilestones = [
    { year: '2010', title: 'The Beginning', desc: 'Started with a dream to explore.', icon: '🌍' },
    { year: '2015', title: 'Global Expansion', desc: 'Reached 20+ countries.', icon: '✈️' },
    { year: '2023', title: 'Award Winning', desc: 'Top agency with 10k+ travelers.', icon: '🏆' }
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          minHeight: { xs: '70vh', md: '90vh' },
          background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.8), rgba(100, 21, 255, 0.6)), url(/travel-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          borderRadius: { xs: '16px', sm: '20px', md: '24px' },
          m: { xs: 1, sm: 2, md: 3 },
          boxSizing: 'border-box', // Ensure padding/margin is included in width
          overflowX: 'hidden', // Prevent horizontal overflow
        }}
      >
        <Box sx={{ textAlign: 'center', color: 'white', maxWidth: '800px' }}>
          <Typography 
            ref={headingRef}
            variant={isMobile ? 'h4' : 'h2'} 
            sx={{ fontWeight: 700, letterSpacing: '-0.5px', mb: 2, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
          >
            Discover Wanderlust
          </Typography>
          <Typography 
            ref={subheadingRef}
            variant={isMobile ? 'body1' : 'h5'} 
            sx={{ fontWeight: 300, opacity: 0.9, lineHeight: 1.6 }}
          >
            Where Your Travel Dreams Take Flight
          </Typography>
        </Box>
      </Box>

      {/* Story Section (Our Journey) */}
      <Box
        ref={storyRef}
        sx={{
          width: '100%',
          maxWidth: '100%', // Prevent overflow
          py: { xs: 6, md: 10 },
          bgcolor: 'white',
          borderRadius: { xs: '16px', sm: '20px', md: '24px' },
          px: { xs: 2, sm: 4, md: 6 },
          boxSizing: 'border-box', // Include padding/margin in width
          overflowX: 'hidden', // Prevent horizontal overflow
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center', 
            fontWeight: 600, 
            mb: 6,
            color: '#0a192f',
            background: 'linear-gradient(90deg, #6415ff, #1a3c34)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Our Journey
        </Typography>
        <Grid container spacing={4} sx={{ px: { xs: 0, sm: 2, md: 4 } }}>
          {journeyMilestones.map((milestone, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  p: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 12px 40px rgba(0,0,0,0.1)', '&:before': { transform: 'scale(1.2)', opacity: 0.2 } },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, #6415ff 10%, transparent 70%)',
                    opacity: 0.1,
                    transition: 'all 0.4s ease',
                    zIndex: 0
                  },
                  boxSizing: 'border-box', // Ensure padding doesn’t cause overflow
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 700, color: '#6415ff', mb: 1 }}>
                    {milestone.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0a192f', mb: 1 }}>{milestone.year}</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#1a3c34', mb: 2 }}>{milestone.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>{milestone.desc}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission & Vision */}
      <Box 
        ref={missionRef} 
        sx={{ 
          bgcolor: '#0a192f', 
          py: { xs: 6, md: 10 }, 
          borderRadius: { xs: '16px', sm: '20px', md: '24px' },
          m: { xs: 1, sm: 2, md: 3 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 4, md: 6 },
          overflowX: 'hidden', // Prevent horizontal overflow
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ 
          flex: { xs: '1 1 100%', md: '1 1 50%' },
          pr: { md: 4 },
          maxWidth: { md: '50%' }
        }}>
          <Typography 
            variant="h4" 
            sx={{ fontWeight: 600, mb: 3, color: '#f4a261' }}
          >
            Our Mission
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ lineHeight: 1.8, mb: 4, color: '#ffffff', opacity: 0.9 }}
          >
            At Wanderlust Adventures, our mission is to ignite a passion for travel in every soul we touch. We strive to deliver seamless, soul-enriching travel experiences that blend adventure with comfort. Whether it's uncovering hidden gems or creating lifelong memories, we’re committed to making every journey extraordinary, sustainable, and deeply personal.
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ fontWeight: 600, mb: 3, color: '#f4a261' }}
          >
            Our Vision
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ lineHeight: 1.8, color: '#ffffff', opacity: 0.9 }}
          >
            We envision a world where travel transcends boundaries, connecting people, cultures, and nature in harmony. Our goal is to redefine the travel industry with innovation, passion, and unparalleled service, becoming the go-to choice for explorers seeking authentic, transformative experiences. We aim to inspire a global community of wanderers who travel responsibly and embrace the beauty of diversity.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            height: { xs: '300px', md: '100%' },
            width: { xs: '90%', lg: '70%' },
            mt: { xs: 4, md: 0 },
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={ecoast}
            alt="Mission and Vision"
            sx={{
              width: { xs: '100%', sm: '90%', md: '90%' },
              height: { xs: '300px', sm: '450px', md: '600px' },
              objectFit: 'cover',
              borderRadius: { xs: '8px', md: '24px' },
              opacity: 0.85,
              position: 'relative',
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </Box>

      {/* Team Section (Our Explorers) */}
      <Box 
        ref={teamRef} 
        sx={{ 
          py: { xs: 6, md: 10 }, 
          bgcolor: 'white', 
          borderRadius: { xs: '16px', sm: '20px', md: '24px' }, 
          width: '100%',
          maxWidth: '100%', // Prevent overflow
          px: { xs: 2, sm: 4, md: 6 },
          boxSizing: 'border-box', // Include padding/margin in width
          overflowX: 'hidden', // Prevent horizontal overflow
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 600, mb: 6, color: '#0a192f' }}>
          Our Explorers
        </Typography>
        <Grid container spacing={3} sx={{ px: { xs: 0, sm: 2, md: 4 } }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  borderRadius: 3, 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease', 
                  '&:hover': { transform: 'translateY(-8px)' },
                  boxSizing: 'border-box', // Ensure card fits within grid
                }}
              >
                <CardMedia 
                  component="img" 
                  height="250" 
                  image={member.image} 
                  alt={member.name} 
                  sx={{ objectFit: 'cover' }} 
                />
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Typography variant="h6" sx={{ color: '#0a192f', fontWeight: 500 }}>{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#6415ff', fontWeight: 400 }}>{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose Us */}
      <Box 
        ref={whyUsRef} 
        sx={{ 
          bgcolor: '#fff', 
          py: { xs: 6, md: 10 }, 
          borderRadius: { xs: '16px', sm: '20px', md: '24px' }, 
          m: { xs: 1, sm: 2, md: 3 },
          overflowX: 'hidden', // Prevent horizontal overflow
          boxSizing: 'border-box',
        }}
      >
        <Container>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              fontWeight: 600, 
              mb: 6, 
              color: '#0a192f', 
              position: 'relative',
              '&:after': { content: '""', position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '4px', bgcolor: '#6415ff', borderRadius: '2px' }
            }}
          >
            Why Wander With Us
          </Typography>
          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box
                  sx={{
                    bgcolor: 'rgba(100, 21, 255, 0.05)',
                    borderRadius: 4,
                    p: 4,
                    textAlign: 'center',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': { bgcolor: '#6415ff', color: 'white', transform: 'translateY(-8px) scale(1.02)', boxShadow: '0 10px 30px rgba(100, 21, 255, 0.2)', '&:before': { opacity: 0.15 } },
                    '&:before': { content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(100, 21, 255, 0.3))', opacity: 0, transition: 'all 0.4s ease' }
                  }}
                >
                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: '#6415ff', mb: 2, '&:hover': { color: 'white' } }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0a192f', mb: 1, transition: 'color 0.3s' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7, transition: 'color 0.3s' }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        ref={ctaRef}
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'transparent',
          background: 'linear-gradient(135deg, #6415ff 0%, #1a3c34 100%)',
          textAlign: 'center',
          borderRadius: { xs: '16px', sm: '20px', md: '24px' },
          m: { xs: 1, sm: 2, md: 3 },
          position: 'relative',
          overflow: 'hidden', // Prevent horizontal overflow
          boxSizing: 'border-box',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
            opacity: 0.3,
            zIndex: 0,
            animation: 'pulse 6s infinite'
          },
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' }
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }} >
          <Typography 
            variant={isMobile ? 'h4' : 'h2'} 
            sx={{ 
              color: 'white', 
              fontWeight: 700, 
              mb: 4, 
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              position: 'relative',
              '&:after': { content: '""', position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', bgcolor: '#f4a261', borderRadius: '2px' }
            }}
          >
            Begin Your Adventure
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#f4a261',
              color: '#0a192f',
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 700,
              borderRadius: '50px',
              boxShadow: '0 6px 20px rgba(244, 162, 97, 0.5)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              '&:hover': { bgcolor: '#fff', color: '#6415ff', transform: 'translateY(-4px) scale(1.05)', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.7)', '&:before': { transform: 'translateX(0)' } },
              '&:before': { content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(100, 21, 255, 0.2), rgba(244, 162, 97, 0.2))', transform: 'translateX(-100%)', transition: 'transform 0.4s ease' }
            }}
          >
            Explore Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default About;