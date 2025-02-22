import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SearchIcon from '@mui/icons-material/Search';
import { gsap } from 'gsap';

// Styled components
const MainNav = styled.div`
  height: 9vh;
  /* border: 2px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #1976d2;
  }
`;

const BookmarkCircle = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 600px) {
    display: none; /* Hide only for devices with width 600px and below */
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 10;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: ${({ isSearchOpen }) => (isSearchOpen ? '2px solid #000' : 'none')};
  border-radius: 20px;
  padding: 2px;
  transition: border 0.3s ease;
`;

const SearchInput = styled.input`
  width: 0;
  opacity: 0;
  border: none;
  outline: none;
  padding: 0;
  transition: width 0.3s ease, opacity 0.3s ease;
`;

const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const isMobile = useMediaQuery('(max-width:960px)'); // Adjust breakpoint as needed

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowDetails(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDetails(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
    if (searchInputRef.current) {
      if (isSearchOpen) {
        // Close animation
        gsap.to(searchInputRef.current, {
          width: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      } else {
        // Open animation
        gsap.to(searchInputRef.current, {
          width: 130,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    }
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon sx={{ fontSize: '1.6em' }} /> },
    { text: 'About Us', icon: <InfoIcon sx={{ fontSize: '1.6em' }} /> },
    { text: 'Tours', icon: <TravelExploreIcon sx={{ fontSize: '1.6em' }} /> },
    { text: 'Prices', icon: <AttachMoneyIcon sx={{ fontSize: '1.6em' }} /> },
  ];
  
  const mobileMenuItems = [
    ...menuItems,
    { text: 'Bookmark', icon: <BookmarkBorderIcon sx={{ fontSize: '1.6em' }} /> },
  ];
  
  const itemsToShow = isMobile || !isMobile ? mobileMenuItems : menuItems;
  
  return (
    <>
      <MainNav>
        {isMobile ? (
          <MenuIcon onClick={toggleDrawer(true)} style={{ cursor: 'pointer', fontSize: '24px' }} />
        ) : (
          <NavItemsContainer>
            {menuItems.map((item) => (
              <div key={item.text} style={{marginRight: "20px",fontWeight: "bold", cursor: 'pointer' }}>
                {/* Display only text on laptop view */}
                <Typography variant="body1">{item.text}</Typography>
              </div>
            ))}
          </NavItemsContainer>
        )}
        <Logo>Logo</Logo>
        <ProfileContainer>
          <SearchContainer isSearchOpen={isSearchOpen}>
            <BookmarkCircle onClick={handleSearchClick}>
              <SearchIcon sx={{ fontSize: '1.3em' }} />
            </BookmarkCircle>
            <SearchInput
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              style={{ width: isSearchOpen ? '130px' : '0', opacity: isSearchOpen ? 1 : 0 }}
            />
          </SearchContainer>
          <BookmarkCircle>
            <BookmarkBorderIcon sx={{ fontSize: '1.4em' }} />
          </BookmarkCircle>
          <ProfileIcon onClick={toggleDetails}>
            <AccountCircleIcon sx={{ fontSize: '2.2em' }} />
            {showDetails && (
              <Dropdown>
                {isLoggedIn ? (
                  <>
                    <Typography variant="body1" sx={{ mb: 1 }}>User: John Doe</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>Email: john@example.com</Typography>
                    <Button variant="contained" color="error" fullWidth onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography variant="h6" sx={{ mb: 2 }}>Sign In</Typography>
                    <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                      Sign In
                    </Button>
                  </>
                )}
              </Dropdown>
            )}
          </ProfileIcon>
          {!isMobile && (
            <Button
              variant="contained"
              startIcon={<CallIcon />}
              sx={{ marginRight: '10px' , borderRadius: "50px" , bgcolor: "black", color: "white" }}
            >
              Contact Us
            </Button>
          )}
        </ProfileContainer>
      </MainNav>
  
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            padding: 2,
          },
        }}
      >
        <List>
          {itemsToShow.map((item) => (
            <ListItem button key={item.text}>
              {isMobile && item.icon && (
                <ListItemIcon sx={{ minWidth: 30 }}>{item.icon}</ListItemIcon>
              )}
              <ListItemText primary={item.text} sx={{ marginLeft: isMobile ? 1 : 0 }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
  
};

export default Navbar;