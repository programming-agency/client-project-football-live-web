import { Box, Paper } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

export default function LeagueCard() {
    return (
        <Paper elevation={3}>
            <Box className='flex items-center justify-between px-5  py-2'>
                <Box className='flex items-center gap-10'>
                    <Box>
                        <Box> <img className='h-10 ' src="/barsa.png" alt="" /></Box>
                    </Box>
                    <Box >
                        <Box className='text-sm'> Ligue 1</Box>
                        <Box className='text-xs'>France</Box>
                    </Box>
                </Box>

                <Box >
                    <FavoriteBorderIcon />
                </Box>
            </Box>


        </Paper>
    )
}
