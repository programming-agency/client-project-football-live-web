import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import EmojiEvents from '@mui/icons-material/EmojiEventsOutlined';
import NavBar from '../Component/NavBar';
import SearchIcon from '@mui/icons-material/Search';
import LeagueCard from '../Component/LeagueCard';


export default function League() {
    return (
        <Box>
            {/* NavBer */}
            <NavBar emoji={<EmojiEvents />} name="League" />

            {/* search bar */}
            <FormControl
                fullWidth>
                <OutlinedInput
                    placeholder='Search ...'
                    startAdornment=
                    {<InputAdornment
                        position="start">
                        <SearchIcon />
                    </InputAdornment>}
                />
            </FormControl>

            {/* League card*/}

            <Box className='px-3 h-[750px] overflow-scroll flex flex-col gap-3
            '>
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
                <LeagueCard />
            </Box>
        </Box>
    )
}
