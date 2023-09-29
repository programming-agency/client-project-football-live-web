import { Box, Paper } from '@mui/material'
import React from 'react'

export default function CarousalCard({ title, group, teamName1, teamName2, teamPhoto1, teamPhoto2, date, time }) {
    return (
        <Paper className='p-2'>
            <Box className='text-center'>
                <Box className='font-semibold text-sm'>{title}</Box>
                <Box className='text-xs'> {group}</Box>
            </Box>

            <Box className='flex justify-center  gap-16 items-center'>
                {/* left section */}
                <Box>
                    <Box className='flex justify-center'>
                        <img className='h-12' src={teamPhoto1} alt="" />
                    </Box>
                    <Box className='text-base mt-2'> {teamName1} </Box>
                    <Box className='text-center text-black text-[12px]'>Home</Box></Box>

                <Box className='border border-red-600 bg-red-300 py-1  rounded-md px-2'>

                    <Box className='text-center text-[10px]'>{date}</Box>
                    <Box className='text-center text-[10px]'>{time}</Box>
                </Box>

                <Box>
                    {/* right section */}
                    <Box className='flex justify-center'>
                        <img className='h-12' src={teamPhoto2} alt="" />
                    </Box>
                    <Box className='text-base mt-2'>{teamName2}</Box>
                    <Box className='text-center text-black text-[12px]'>Away</Box>
                </Box>

            </Box>
        </Paper>
    )
}
