import { Box, Paper } from '@mui/material'
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

export default function DailyMatchCard() {
    return (
        <Box>
            {/* Header */}
            <Box className="flex gap-5 rounded-t-md  bg-blue-700 px-3 py-2 text-white items-center ">
                <Box> <img className='h-6' src="/barsa.png" alt="" /></Box>
                <Box> 4.Liga Divizie F, Czech-Republic</Box>
            </Box>
            <Paper elevation={3}>
                <Box className='flex justify-between items-center px-5 py-5'>
                    <Box className='flex gap-8 items-center'>
                        <Box className='w-20 space-y-2'>
                            <Box className="text-sm whitespace-nowrap text-center">30-sep-2023</Box>
                            <Box className="text-sm whitespace-nowrap text-center">12:30 AM</Box>
                        </Box>

                        <Box className='space-y-3'>
                            <Box className='flex gap-3 items-center'>
                                <Box><img className='h-6' src="/barsa.png" alt="" /></Box>
                                <Box>Vartimov</Box>
                            </Box>
                            <Box className='flex gap-3  items-center'>
                                <Box><img className='h-6' src="/barsa.png" alt="" /></Box>
                                <Box>lebar Pull </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Icon  */}
                    <Box >
                        <NotificationImportantIcon />
                    </Box>
                </Box>

            </Paper>
        </Box>
    )
}
