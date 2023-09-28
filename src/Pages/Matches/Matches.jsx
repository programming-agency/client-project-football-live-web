import { Box } from '@mui/material'
import MatchIcon from '@mui/icons-material/CalendarMonthOutlined';
import React from 'react'
import NavBar from '../Component/NavBar';

export default function Matches() {
    return (
        <Box>
            <NavBar emoji={<MatchIcon />} name="  Matches" />

        </Box>
    )
}
