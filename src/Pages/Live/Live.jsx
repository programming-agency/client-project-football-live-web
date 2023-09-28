import { Box, } from '@mui/material'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import LiveTv from '@mui/icons-material/LiveTv';
import NavBar from '../Component/NavBar';


export default function Live() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box>
                <NavBar emoji={<LiveTv />} name="Live" />
            </Box>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example">
                            <Tab label="Live Score" value="1" />
                            <Tab label="Live" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
