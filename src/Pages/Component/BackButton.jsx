import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button'; // You can use Material-UI's Button or any other button component of your choice
import { Box } from '@mui/material';


export default function BackButton({ title }) {


    const handleStepBack = () => {
        window.history.back();  // Use history.goBack() to navigate back one step in the history stack
    };
    return (
        <Box className='flex gap-10 py-3 bg-blue-600'>
            <Button color='error' startIcon={<KeyboardArrowLeftIcon />} onClick={handleStepBack}>
                Back
            </Button>
            <Box className='text-white py-2 flex justify-center  px-5 bg-blue-400 rounded-xl'>
                {title}
            </Box>


        </Box>
    )
}
