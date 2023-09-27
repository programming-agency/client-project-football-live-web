import React from 'react';
import { Outlet } from 'react-router-dom';
import LabelBottomNavigation from './LabelBottomNavigation';
import { Box } from '@mui/material';

const Main = () => {
    return (
        <Box ClassName='flex flex-col bg-fuchsia-400 p-5 h-screen'>

            <Box ClassName="flex-grow ">
                <Outlet />
            </Box>

            <Box>
                <LabelBottomNavigation />
            </Box>
        </Box>
    );
};

export default Main;