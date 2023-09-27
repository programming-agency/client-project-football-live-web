import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { AppBar } from '@mui/material';

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
        <AppBar></AppBar>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Matches" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Live" icon={<LiveTvIcon />} />
        <BottomNavigationAction label="League" icon={<EmojiEventsIcon />} />
        <BottomNavigationAction label="More" icon={<ReadMoreIcon />} />
      </BottomNavigation>
    </Box>
  );
}