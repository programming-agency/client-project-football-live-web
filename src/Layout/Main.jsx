import React from 'react';
import { Outlet } from 'react-router-dom';
import LabelBottomNavigation from './LabelBottomNavigation';
import { Box, Paper } from '@mui/material';

const Main = () => {
    return (
        <Box className=" h-screen flex flex-col">

            <Box className="flex-grow ">
                <Outlet />
            </Box>

            <Box className="border-t">
                <LabelBottomNavigation />
            </Box>
        </Box>
    );
};

export default Main;