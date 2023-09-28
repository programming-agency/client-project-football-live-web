import { Box } from '@mui/material'
import MatchIcon from '@mui/icons-material/CalendarMonthOutlined';
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavBar from '../Component/NavBar';

export default function Matches() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <NavBar emoji={<MatchIcon />} name="  Matches" />

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            variant="scrollable" // Set the variant to scrollable
                            scrollButtons="auto" // Set scrollButtons to auto to show scroll buttons when needed
                            allowScrollButtonsMobile // Enable scroll buttons on mobile devices
                        >
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="4" />
                            <Tab label="Item Three" value="5" />
                            <Tab label="Item Three" value="6" />
                            <Tab label="Item Three" value="7" />
                            <Tab label="Item Three" value="8" />
                            <Tab label="Item Three" value="9" />
                            {/* Add more tabs as needed */}
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item Three</TabPanel>
                    <TabPanel value="5">Item Three</TabPanel>
                    <TabPanel value="6">Item Three</TabPanel>
                    <TabPanel value="7">Item Three</TabPanel>
                    <TabPanel value="8">Item Three</TabPanel>
                    <TabPanel value="9">Item Three</TabPanel>
                    {/* Add more TabPanel components for additional tabs */}
                </TabContext>
            </Box>
        </Box>
    )
}
