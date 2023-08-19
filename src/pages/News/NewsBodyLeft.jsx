import React from 'react';
import { Box, Typography } from '@mui/material';
import pic from './assests/news.jpg'
import PersonIcon from '@mui/icons-material/Person';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
const NewsBodyLeft = () => {
    return (
        <Box sx={{margin:"50px 60px", display:{xs:"none",md:'flex'}}}>
            <Box sx={{width:'40%',}}>
                <img src={pic} width={'100%'} height={'100%'}/>

            </Box>
            <Box sx={{width:'60%',padding:"10px",margin:"0px 20px",}}>
                <Box sx={{display:"flex", flexDirection:'row','&>*':{
                    margin:'10px',
                    color:"grey",
                    fontSize:"14px"
                }}}>
                    <Typography><PersonIcon/> Admin</Typography>
                    <Typography><AccessAlarmsIcon/> September 20,2018</Typography>
                </Box>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>The company behind vespa built a cargo robot that follows you around</Typography>
                <Typography sx={{marginTop:"10px",fontSize:'15px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

            </Box>
        </Box>
    );
};

export default NewsBodyLeft;