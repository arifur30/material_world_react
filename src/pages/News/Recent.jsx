import React from 'react';
import { Box ,Typography} from '@mui/material';
import pic from './assests/news.jpg'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
const Recent = () => {
    return (
        <Box sx={{width:'100%',display:'flex',marginTop:'10px','&>*':{
            padding:'10px'
          }}}>
            <Box sx={{width:'50%'}}>
                <img src={pic} width={'100%'}/>
            </Box>
            <Box sx={{width:'50%'}}>
                <Typography sx={{fontSize:"13px",color:"grey"}}><AccessAlarmsIcon sx={{fontSize:'13px'}}/> November 29,2018</Typography>
                <Typography sx={{fontWeight:'bold',fontSize:'15px',marginTop:'7px'}}>Crafty Cook and decorate all our food with love</Typography>
            </Box>

          </Box>
    );
};

export default Recent;