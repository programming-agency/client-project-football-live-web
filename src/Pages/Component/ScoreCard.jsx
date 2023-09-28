import { Box, Paper } from '@mui/material'
import React from 'react'

export default function ScoreCard() {
    return (
        <Box>
            <Paper elevation={5} sx={{ padding: 1 }}>
                <Box className="flex gap-5 rounded-t-md  bg-blue-700 px-3 py-2 text-white items-center ">
                    <Box> <img className='h-6' src="/barsa.png" alt="" /></Box>
                    <Box> 4.Liga Divizie F, Czech-Republic</Box>
                </Box>

                <Paper elevation={5} className='px-3 py-3'>
                    <Box className='flex gap-5 items-center'>
                        <Box className='border-2 border-blue-500 w-9 text-center rounded-full p-1'> 1O</Box>

                        <Box className=' space-y-3'>
                            <Box className='flex gap-32 justify-around items-center'>
                                <Box className='flex gap-3 items-center'>
                                    <Box><img className='h-5' src="/barsa.png" alt="" /></Box>
                                    <Box>Vartimov</Box>
                                </Box>
                                <Box className='p-1 h-7 w-7 text-center  text-white rounded-full bg-blue-600' >5</Box>
                            </Box>
                            <Box className='flex gap-32 items-center'>
                                <Box className='flex gap-3 items-center'>
                                    <Box><img className='h-5' src="/barsa.png" alt="" /></Box>
                                    <Box>Vartimov</Box>
                                </Box>

                                <Box className='p-1 h-7 w-7 text-center  text-white rounded-full bg-blue-600' >5</Box>
                            </Box>
                        </Box>
                    </Box>



                </Paper>

            </Paper>

        </Box>
    )
}
