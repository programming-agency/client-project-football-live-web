import { Box } from '@mui/material'
import React from 'react'
import RecentMatchCard from './RecentMatchCard'
import BackButton from './BackButton'

export default function MoreRecentCard({ title }) {
    return (
        <Box>
            <Box >
                <Box>
                    <BackButton title='Recent Match' />
                </Box>

            </Box>
            <Box className='flex flex-col h-[800px] overflow-scroll gap-2 px-3'>
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />
                <RecentMatchCard />

            </Box>
        </Box>
    )
}
