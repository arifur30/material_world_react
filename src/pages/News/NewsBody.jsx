import React from 'react';
import { Box } from '@mui/material';
import NewsBodyLeft from './NewsBodyLeft';
import NewsBodyRight from './NewsBodyRight';

const NewsBody = () => {
    return (
       <Box sx={{display:'flex',width:'100%'}}>
        <Box sx={{width:'75%'}}>
            <NewsBodyLeft/>
            <NewsBodyLeft/>
            <NewsBodyLeft/>
            <NewsBodyLeft/>
       
        </Box>
        <Box sx={{width:"25%"}}>
            <NewsBodyRight/>

        </Box>
       </Box>
    );
};

export default NewsBody;