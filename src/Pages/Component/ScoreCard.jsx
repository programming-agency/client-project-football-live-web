import { Box, Paper } from '@mui/material'
import React from 'react'

export default function ScoreCard() {
    return (
        <Paper elevation={5}>
            <Box className="flex gap-5 rounded-t-md  bg-blue-700 px-3 py-2 text-white items-center ">
                <Box> <img className='h-5 ' src="/barsa.png" alt="" /></Box>
                <Box> Super league, Uzbekistan</Box>
            </Box>


            <Paper elevation={5} className='px-3 py-3'>

                <Box className='flex justify-between items-center'>
                    <Box className='flex gap-5 items-center'>
                        <Box className='border-2 border-blue-500 w-9 text-center rounded-full p-1'> 1O</Box>
                        <Box className='space-y-3'>
                            <Box className='flex gap-3 items-center'>
                                <Box><img className='h-6' src="/barsa.png" alt="" /></Box>
                                <Box className='whitespace-nowrap'>Vartimov</Box>
                            </Box>

                            <Box className='flex gap-3 items-center'>
                                <Box><img className='h-6' src="/barsa.png" alt="" /></Box>
                                <Box className='whitespace-nowrap'> Liber Pull</Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className='space-y-3'>
                        <Box className='p-1 h-7 w-7 text-center  text-white rounded-full bg-blue-600' >5</Box>

                        <Box className='p-1 h-7 w-7 text-center  text-white rounded-full bg-blue-600' >0</Box>
                    </Box>
                </Box>

            </Paper>

        </Paper>


    )
}
