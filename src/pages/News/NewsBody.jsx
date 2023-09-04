import React from 'react';
import { Box } from '@mui/material';
import NewsBodyLeft from './NewsBodyLeft';
import NewsBodyRight from './NewsBodyRight';

const NewsBody = () => {
    return (
        <>
       <Box sx={{display:{xs:'none',lg:'flex',sm:'flex'},width:'100%'}}>
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
     

       <Box sx={{display:{xs:'flex',lg:'none',sm:'none'},width:'100%'}}>
        <Box sx={{width:'100%'}}>
            <NewsBodyLeft/>
            <NewsBodyLeft/>
            <NewsBodyLeft/>
            <NewsBodyLeft/>
       
        </Box>
       
       </Box>

       </>
    );
};

export default NewsBody;