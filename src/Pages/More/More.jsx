import { Box } from '@mui/material'
import ReadMoreIcon from '@mui/icons-material/ReadMoreOutlined';
import React from 'react'
import NavBar from '../Component/NavBar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShareIcon from '@mui/icons-material/Share';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';


export default function More() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <NavBar emoji={<ReadMoreIcon />} name="More" />
      <Box className='bg-blue-500 h-screen text-white'>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
            <ChevronRightIcon />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary="Share" />
            <ChevronRightIcon />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Rate Me" />
            <ChevronRightIcon />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PrivacyTipIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
            <ChevronRightIcon />
          </ListItemButton>

        </List>
      </Box>
    </Box>
  )
}

