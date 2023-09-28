import { Box, Button,AppBar  } from '@mui/material' 
import RecentMatchCard from '../Component/RecentMatchCard'
import LiveTv from '@mui/icons-material/LiveTv';
 

export default function Live() {
    return (
        <Box>
            <AppBar position='relative' className='px-5'>
                <Box className="flex gap-3 items-center text-3xl py-5">
                    <Box>
                        <LiveTv />
                    </Box>
                    <Box>
                        Live
                    </Box>
                </Box>
            </AppBar>
            <Box className="flex justify-between items-center px-5">
                <Box>Recent Matches</Box>
                <Box> <Button color='warning'> See More</Button></Box>
            </Box>

            <RecentMatchCard />
          
        </Box>
    )
}
