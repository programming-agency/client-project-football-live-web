import { AppBar, Box } from '@mui/material'
import React from 'react'

export default function NavBar({ emoji, name }) {
    return (
        <AppBar position='relative' className='px-5'>
            <Box className="flex gap-3 items-center text-3xl py-5">
                <Box>
                    {emoji}
                </Box>
                <Box>              
                    {name}
                </Box>
            </Box>
        </AppBar>
    )
}
