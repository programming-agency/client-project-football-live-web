import { Box, Paper } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

export default function LeagueCard() {
    return (
        <Paper>

            <Box className='flex items-center justify-around py-2'>
                <Box>
                    <Box> <img className='h-5 ' src="/barsa.png" alt="" /></Box>
                </Box>
                <Box >
                    <Box className='text-sm'> Ligue 1</Box>
                    <Box className='text-xs'>France</Box>
                </Box>
                <Box >
                    <FavoriteBorderIcon />
                </Box>
            </Box>


        </Paper>
    )
}
