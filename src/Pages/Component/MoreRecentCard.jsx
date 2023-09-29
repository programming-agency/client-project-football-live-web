import { Box, Button } from '@mui/material'
import React from 'react'
import RecentMatchCard from './RecentMatchCard'
import BackButton from './BackButton'

export default function MoreRecentCard() {
    return (
        <Box>
            <Box className='flex gap-20'>
                <Box>
                    <BackButton />
                </Box>
                <Box>
                    <Button variant='outlined'> Recent Match</Button>
                </Box>
            </Box>

            <Box className='flex flex-col gap-2 px-3'>
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
            </Box>
        </Box>
    )
}
