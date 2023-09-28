import { Paper, Box } from '@mui/material'
import React from 'react'

export default function FixtureCard() {
  return (
    <Paper elevation={3} className='p-5 mt-8'>
      <Box className='flex justify-center'> <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png" alt="" /></Box>
      <Box className='text-xs text-center whitespace-nowrap mt-4'>Ligue 1 gsssaa</Box>
      <Box className='text-[10px] text-center'> France</Box>
    </Paper>
  )
}

