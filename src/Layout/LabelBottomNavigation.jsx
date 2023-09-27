import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Bottom Navigation Bar */}
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Matches" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Live" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="League" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="More" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}