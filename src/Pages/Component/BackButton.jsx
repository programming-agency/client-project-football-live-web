import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button'; // You can use Material-UI's Button or any other button component of your choice


export default function BackButton() {


    const handleStepBack = () => {
        window.history.back();  // Use history.goBack() to navigate back one step in the history stack
    };
    return (
        <Button startIcon={<KeyboardArrowLeftIcon />} onClick={handleStepBack}>
            Back
        </Button>
    )
}
