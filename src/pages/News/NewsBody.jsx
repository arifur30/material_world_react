import React from 'react';
import { Box } from '@mui/material';
import NewsBodyLeft from './NewsBodyLeft';
import NewsBodyRight from './NewsBodyRight';

const NewsBody = ({news}) => {
    console.log(news);
    return (
        <>
       <Box sx={{display:{xs:'none',lg:'flex',sm:'flex'},width:'100%'}}>
        <Box sx={{width:'75%'}}>
            {news && news.map((item)=>(
                  <NewsBodyLeft item={item}/>

            ))}
          
            
       
        </Box>
        <Box sx={{width:"25%"}}>
            <NewsBodyRight/>

        </Box>
       </Box>
     

       <Box sx={{display:{xs:'flex',lg:'none',sm:'none'},width:'100%'}}>
        <Box sx={{width:'100%'}}>
        {news && news.map((item)=>(
                  <NewsBodyLeft item={item}/>

            ))}
          
       
        </Box>
       
       </Box>

       </>
    );
};

export default NewsBody;