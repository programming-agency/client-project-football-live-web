import { Box, Paper } from '@mui/material'
import React from 'react'

export default function LiveTvs({match}) {
    return (
        <Box>
           <Box className='flex justify-center'><img  src="/tv.png" alt="" /></Box>
            <Box className='text-xl text-center'>{match}</Box>
        </Box>
    )
}
