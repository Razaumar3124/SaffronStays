import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const ProfileSection = ({ isMobile }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <BookmarkBorderIcon style={{ cursor: 'pointer' }} />
      <AccountCircleIcon onClick={toggleDetails} style={{ cursor: 'pointer', fontSize: '2.2em' }} />
      {showDetails && (
        <div style={{ position: 'absolute', top: '100%', right: 0, backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
          {isLoggedIn ? (
            <>
              <Typography>User: John Doe</Typography>
              <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button variant="contained" color="primary" onClick={handleLogin}>Sign In</Button>
          )}
        </div>
      )}
      {!isMobile && <Button variant="contained">Contact Us</Button>}
    </>
  );
};

export default ProfileSection;