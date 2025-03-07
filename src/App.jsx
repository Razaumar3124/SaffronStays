import React, { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import routes from './Routes/Routes';

const App = () => {
  // Memoize the theme to prevent re-creation on every render
  const theme = useMemo(() => createTheme({
    // Refined color palette
    palette: {
      primary: {
        main: '#6415ff', // Vibrant purple
        light: '#8b5cf6',
        dark: '#4c1d95',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f4a261', // Warm orange
        light: '#f7c08a',
        dark: '#c67c3e',
        contrastText: '#0a192f',
      },
      background: {
        default: '#f8fafc', // Soft gray-blue background
        paper: '#ffffff',
        alternate: '#f1f5f9', // Light slate for variety
      },
      text: {
        primary: '#0a192f', // Deep navy
        secondary: '#64748b', // Slate gray
        disabled: '#94a3b8', // Muted slate
      },
      divider: '#e2e8f0', // Light divider color
    },
    // Enhanced typography
    typography: {
      fontFamily: "'Poppins', 'Roboto', sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: '3.75rem', // Slightly larger
        lineHeight: 1.2,
        letterSpacing: '-0.01562em',
        '@media (max-width:600px)': { fontSize: '2.5rem' },
      },
      h2: {
        fontWeight: 600,
        fontSize: '3rem',
        lineHeight: 1.3,
        letterSpacing: '-0.00833em',
        '@media (max-width:600px)': { fontSize: '2rem' },
      },
      h3: {
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: 1.4,
        letterSpacing: '0em',
        '@media (max-width:600px)': { fontSize: '1.75rem' },
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.5,
        letterSpacing: '0.00735em',
        '@media (max-width:600px)': { fontSize: '1.5rem' },
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
        letterSpacing: '0em',
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#0a192f',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#64748b',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.75,
        color: '#0a192f',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        color: '#64748b',
      },
    },
    // Custom breakpoints
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900, // Adjusted for better laptop view
        lg: 1200,
        xl: 1536,
      },
    },
    // Global component overrides
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#f8fafc',
            color: '#0a192f',
            lineHeight: 1.6,
            transition: 'background-color 0.3s ease', // Smooth transition
          },
          html: {
            scrollBehavior: 'smooth', // Smooth scrolling
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 600,
            padding: '10px 28px', // Slightly larger
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            },
          },
          contained: {
            boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
          },
          outlined: {
            borderWidth: 2,
            '&:hover': { borderWidth: 2 },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-4px)',
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: { xs: 16, sm: 24, md: 32 },
            paddingRight: { xs: 16, sm: 24, md: 32 },
            maxWidth: { md: 'none' }, // Remove max-width constraint on md and up
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            width: '100%',
            margin: 0, // Reset default margin
          },
        },
      },
    },
    // Shape for consistent rounding
    shape: {
      borderRadius: 12,
    },
    // Enhanced shadows
    shadows: [
      'none',
      '0px 2px 6px rgba(0,0,0,0.05)',
      '0px 4px 12px rgba(0,0,0,0.08)',
      '0px 6px 18px rgba(0,0,0,0.1)',
      '0px 8px 24px rgba(0,0,0,0.12)',
      ...Array(20).fill('0px 10px 30px rgba(0,0,0,0.15)'),
    ],
    // Transitions
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      duration: {
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
  }), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;