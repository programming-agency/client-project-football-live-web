import React from 'react';
import { Outlet } from 'react-router-dom';
import LabelBottomNavigation from './LabelBottomNavigation';
import { Box } from '@mui/material';

const Main = () => {
    return (
        <Box className='flex flex-col justify-between bg-fuchsia-400 h-screen'>

            <Box ClassName="flex-grow ">
                <Outlet />
            </Box>

            <Box ClassName="bg-red-500 ">
                <LabelBottomNavigation />
            </Box>
        </Box>
    );
};

export default Main;