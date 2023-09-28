import { AppBar, Box, Paper } from '@mui/material'
import React from 'react'

export default function ScoreCard() {
    return (
        <Box>
            <Paper >
                <Box className="flex gap-5 rounded-t-md  bg-blue-700 px-3 py-2 text-white items-center ">
                    <Box> <img className='h-5 ' src="/barsa.png" alt="" /></Box>
                    <Box> 4.Liga Divizie F, Czech-Republic</Box>
                </Box>
                <Paper>
                    <Box> O</Box>
                    <Box className='flex items-center '>
                        <Box>
                            <img src="/barsa.png" alt="" />
                        </Box>                        
                        <Box>
                            Vartimov
                        </Box>
                        <Box className='p-1 h-7 w-7 text-c rounded-full bg-blue-600' >
                            5
                        </Box>

                    </Box>

                </Paper>

            </Paper>

        </Box>
    )
}
