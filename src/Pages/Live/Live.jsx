import { Box, Paper, } from '@mui/material'
import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import LiveTv from '@mui/icons-material/LiveTv';
import NavBar from '../Component/NavBar';
import LiveTvs from '../Component/LiveTvs';
import ScoreCard from '../Component/ScoreCard';


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
                    <Box className='flex justify-center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList className='flex justify-center'

                            onChange={handleChange}
                            aria-label="lab API tabs example">
                            <Tab label="Live Score" value="1" />
                            <Tab label="Live" value="2" />
                        </TabList>
                    </Box>
                    {/*  Score card */}
                    <TabPanel value="1">

                        Item One
                        <ScoreCard />
                    </TabPanel>
                    {/* live tab */}
                    <TabPanel value="2">
                        < Box>
                            <LiveTvs match='Match-4' />
                            <LiveTvs match='Match-4' />
                            <LiveTvs match='Match-4' />
                            <LiveTvs match='Match-4' />

                        </ Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
