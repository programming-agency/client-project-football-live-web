import { AppBar, Box } from '@mui/material'
import ReadMoreIcon from '@mui/icons-material/ReadMoreOutlined';
import React from 'react'
import NavBar from '../Component/NavBar';

export default function More() {
    return (
       <Box>
         <NavBar emoji={<ReadMoreIcon/>} name="More"/>
       </Box>
    )
}
