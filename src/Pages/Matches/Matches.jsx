import { Box } from '@mui/material'
import MatchIcon from '@mui/icons-material/CalendarMonthOutlined';
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavBar from '../Component/NavBar';

import MatchesCards from '../Component/MatchesComponent/MatchesCards';
import DailyMatchCard from '../Component/MatchesComponent/DailyMatchCard';



export default function Matches() {
    const [value, setValue] = React.useState('3');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            {/* navbar */}
            <NavBar emoji={<MatchIcon />} name="  Matches" />
            {/* sub header  */}
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
                            <Tab label="Wed 27 Sep" value="1" />
                            <Tab label="Yesterday" value="2" />
                            <Tab label="Today" value="3" />
                            <Tab label="Tomorrow" value="4" />
                            <Tab label="Sun 01 Oct" value="5" />
                            <Tab label="Mon 02 Oct" value="6" />
                            <Tab label="Tue 03 Oct" value="7" />
                            {/* Add more tabs as needed */}
                        </TabList>
                    </Box>
                    {/*show match tabs  */}
                    <TabPanel value="1">
                        {/* Wed 27 Sep */}
                        <Box className='flex h-screen overflow-scroll  flex-col gap-5'>

                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                        </Box>

                    </TabPanel>
                    <TabPanel value="2">
                        {/* Yesterday  */}
                        <Box className='flex h-screen overflow-scroll  flex-col gap-5'>

                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                        </Box>
                    </TabPanel>
                    <TabPanel value="3">
                        {/* today */}
                        <Box className='flex h-screen overflow-scroll  flex-col gap-5'>

                            <DailyMatchCard />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                        </Box>

                    </TabPanel>
                    <TabPanel value="4">
                        {/* Tomorrow */}
                        <Box className='flex h-screen overflow-scroll  flex-col gap-5'>

                            <DailyMatchCard />
                            <DailyMatchCard />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                        </Box>
                    </TabPanel>

                    <TabPanel value="5">
                        {/* Sun 01 Oct */}
                        <Box className='flex h-screen overflow-scroll  flex-col gap-5'>

                            <DailyMatchCard />
                            <DailyMatchCard />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                        </Box>
                    </TabPanel>
                    <TabPanel value="6">
                        {/* Mon 02 Oct */}
                        <Box className='flex h-screen overflow-scroll  flex-col gap-5'>

                            <DailyMatchCard />
                            <DailyMatchCard />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <DailyMatchCard />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                        </Box>
                    </TabPanel>
                    <TabPanel value="7">
                        {/* Tue 03 Oct */}
                        <Box className='flex h-screen overflow-scroll  flex-col gap-5'>

                            <DailyMatchCard />
                            <DailyMatchCard />
                            <DailyMatchCard />
                            <MatchesCards />
                            <DailyMatchCard />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                            <MatchesCards />
                            <MatchesCards />
                            <DailyMatchCard />
                            <MatchesCards />
                        </Box>
                    </TabPanel>
                    {/* Add more TabPanel components for additional tabs */}
                </TabContext>
            </Box>
        </Box>
    )
}
