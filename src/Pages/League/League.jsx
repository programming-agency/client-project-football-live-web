import {  Box } from '@mui/material'
import EmojiEvents from '@mui/icons-material/EmojiEventsOutlined';
import NavBar from '../Component/NavBar';


export default function League() {
    return (
        <Box>
            {/* NavBer */}             
            <NavBar emoji={<EmojiEvents/>} name="League"/>

            
             
        </Box>
    )
}
