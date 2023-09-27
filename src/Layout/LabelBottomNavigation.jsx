import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LiveTv from '@mui/icons-material/LiveTv';
import EmojiEvents from '@mui/icons-material/EmojiEventsOutlined';
import ReadMoreIcon from '@mui/icons-material/ReadMoreOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import MatchIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="w-full">
      <BottomNavigation        
        showLabels
        value={value}
        // sx={{backgroundColor: (theme) => theme.palette.primary.main}}
        sx={{
          bgcolor: (theme) => theme.palette.primary.main,
          '& .Mui-selected': {
            '& .MuiBottomNavigationAction-label': {
              color: 'white',
              fontSize: theme => theme.typography.caption,
              transition: 'none',
              fontWeight: 'bold',
              lineHeight: '20px'
            },
            '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
              color: 'white'
            }
          }
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Bottom Navigation Bar */}
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Matches" icon={<MatchIcon />} />
        <BottomNavigationAction label="Live" icon={<LiveTv />} />
        <BottomNavigationAction label="League" icon={<EmojiEvents />} />
        <BottomNavigationAction label="More" icon={<ReadMoreIcon />} />
      </BottomNavigation>
    </Box>
  );
}