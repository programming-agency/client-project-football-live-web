import { Box, Paper } from '@mui/material'
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import React from 'react'

export default function MatchesDayCard() {
    return (
        <Box>
            {/* Header */}
            <Box className="flex gap-5 rounded-t-md  bg-blue-700 px-3 py-2 text-white items-center ">
                <Box> <img className='h-6' src="/barsa.png" alt="" /></Box>
                <Box> 4.Liga Divizie F, Czech-Republic</Box>
            </Box>
            {/* sub Header */}
            <Paper elevation={5} className='px-3 py-3'>
                <Box className='flex  gap-10 items-center'>
                    <Box className='w-24'>
                        <Box className="text-sm text-center">30-sep-2023</Box>
                        <Box className="text-sm text-center">12:30 AM</Box>
                    </Box>
                    <Box className='space-y-3 w-40'>
                        <Box className='flex gap-3 items-center'>
                            <Box><img className='h-5' src="/barsa.png" alt="" /></Box>
                            <Box>SundarderLand </Box>
                        </Box>
                        <Box className='flex gap-3 items-center'>
                            <Box><img className='h-5' src="/barsa.png" alt="" /></Box>
                            <Box>Bolivar</Box>
                        </Box>

                    </Box>
                    <Box className='ml-24'>
                        <NotificationImportantIcon />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
