import React, { useState, useRef } from 'react';
import { Drawer, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MainNav, Logo, ProfileContainer } from './HeaderComp/NavbarStyles';
import NavItems from './HeaderComp/NavItems';
import ProfileSection from './HeaderComp/ProfileSection';
import DrawerMenu from './HeaderComp/DrawerMenu';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:960px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setIsDrawerOpen(open);
  };

  return (
    <>
      <MainNav>
        {isMobile ? <MenuIcon onClick={toggleDrawer(true)} /> : <NavItems />}
        <Logo>Logo</Logo>
        <ProfileContainer>
          <ProfileSection isMobile={isMobile} />
        </ProfileContainer>
      </MainNav>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <DrawerMenu />
      </Drawer>
    </>
  );
};

export default Navbar;