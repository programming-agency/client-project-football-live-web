import { Box, Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import RecentMatchCard from '../Component/RecentMatchCard';
import NavBar from '../Component/NavBar';
import Carousal from '../Component/Carousal';
import SearchIcon from '@mui/icons-material/Search';
import FixtureCard from '../Component/FixtureCard';





const Home = () => {
    return (
        <Box>
            {/* Navbar  */}
            <NavBar emoji={<HomeIcon />} name="Home" />

            {/* carousel  */}
            <Box><Carousal /></Box>

            {/* Recently match section start */}
            <Box>
                <Box className="flex justify-between items-center px-5">
                    <Box className='text-xs font-semibold'>Recent Matches</Box>
                    <Box> <Button color='warning'> See More</Button></Box>
                </Box>
                <Box className='flex flex-col gap-2 px-3'>
                    <RecentMatchCard />
                    <RecentMatchCard />
                    <RecentMatchCard />
                    <RecentMatchCard />
                </Box>
            </Box>
            {/* Recently match section end */}

            {/* weekly match section start */}

            <Box>
                <Box className="flex mt-5 gap-3  items-center px-5  ">
                    <Box className='text-xs  whitespace-nowrap  font-semibold'> Weekly Fixture</Box>
                    <Box className='w-full'>
                        <FormControl fullWidth>
                            <OutlinedInput placeholder='Search ...'
                                startAdornment={<InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>}
                            />
                        </FormControl>
                    </Box>
                </Box>

                <Box className='flex gap-3 p-2 overflow-scroll '>                     
                    <FixtureCard  />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />
                    <FixtureCard />

                </Box>
            </Box>
            {/* weekly match section  end*/}

        </Box>
    );
};

export default Home;

