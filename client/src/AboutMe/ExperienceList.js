import * as React from 'react';
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import { width } from '@mui/system';

import {experienceData} from './data'

// import {FaTv as source, FaGraduationCap, FaRegMoneyBillAlt} from 'react-icons/fa';


function ExprienceItemsList(){
    return(
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#f2f3f4' }}>
            {
                experienceData.map((element)=>{
                    return(
                        <>
                        <ListItem alignItems='flex-start'> 
                            <ListItemAvatar>
                                <Avatar src={element.image} alt="trial TV avatar" />
                            </ListItemAvatar>

                            <ListItemText
                                key={element.key}
                                primary={element.title}
                                secondary={
                                    <React.Fragment> 
                                        <Typography                                 
                                            sx={{display:"inline"}}
                                            components="span"
                                            variant="body2"
                                            color="text.primary">
                                                {element.company}
                                        </Typography>
                                        {/* {" — I'll be in your neighborhood doing errands this…"} */}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        </>
                    ); 
                })
            }
            </List>
        </div>
    ); 
}

export default ExprienceItemsList; 


{/* <ListItem alignItems='flex-start'>
<ListItemAvatar>
    <Avatar src={source} alt="trial TV avatar" />
</ListItemAvatar>
<ListItemText
    primary="Brunch this weekend?"
    secondary={
        <React.Fragment> 
            <Typography                                 
                sx={{display:"inline"}}
                components="span"
                variant="body2"
                color="text.primary">
                    Ali Connoors 
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
    }
/>
</ListItem>
<Divider variant="inset" component="li" /> */}