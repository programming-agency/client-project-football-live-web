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

            <Box>
                <Box className='overflow-scroll' sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Tue 26 Sep" value="1" />
                                <Tab label="Yesterday" value="2" />
                                <Tab label="Today" value="3" />
                                <Tab label="Tomorrow" value="4" />
                                <Tab label="Sat 30 Sep" value="5" />
                                <Tab label="Sun 01 Otc" value="6" />
                                <Tab label="Mon 02 Oct" value="7" />
                                <Tab label="Item Three" value="8" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                        <TabPanel value="4">Item 4</TabPanel>
                        <TabPanel value="5">Item 5</TabPanel>
                        <TabPanel value="6">Item 6</TabPanel>
                        <TabPanel value="7">Item 7</TabPanel>
                        <TabPanel value="8">Item  8</TabPanel>
                    </TabContext>
                </Box>
            </Box>

        </Box>
    )
}
