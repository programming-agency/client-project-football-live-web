import { Box, Paper } from '@mui/material'
import React from 'react'

export default function RecentMatchCard() {
    return (
        <Paper className='flex justify-center items-center py-2 gap-10'>
            <Box className='text-xs'> Celaya </Box>

            <Box className='flex justify-center items-center gap-3 '>
                <Box> <img className='h-7' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png" alt="" /></Box>
                <Box>
                    <Box className='text-xs text-red-600'>2 H</Box>
                    <Box className='text-xs'> 0-0</Box>
                </Box>
                <Box> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWv0F-eVBeIjaS6Dyqe4fwGwAVQYbmeC1V1tgjfNxtjA&s" alt="" /> </Box>
            </Box>

            <Box className='text-xs'>Concun</Box>
        </Paper>
    )
}
