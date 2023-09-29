import { Box, Paper } from '@mui/material'
import React from 'react'

export default function DetailsCard({ teamName1, teamName2, teamPhoto1, teamPhoto2, goal }) {
    return (
        <Paper sx={{ color: '' }}>

            <Box className='flex justify-center bg-blue-600 py-5 gap-16 items-center'>
                {/* left section */}
                <Box>
                    <Box className='flex justify-center'>
                        <img className='h-10' src={teamPhoto1} alt="" />
                    </Box>
                    <Box className='text-base mt-2'> {teamName1} </Box>
                </Box>
                <Box>
                    <Box className='text-center'>{goal}</Box>
                </Box>

                <Box>
                    {/* right section */}
                    <Box className='flex justify-center'>
                        <img className='h-10' src={teamPhoto2} alt="" />
                    </Box>
                    <Box className='text-base mt-2'>{teamName2}</Box>

                </Box>

            </Box>
        </Paper>
    )
}
