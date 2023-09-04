import React from 'react';
import news2 from './assests/news3.jpg'
import {Box, Typography} from '@mui/material'
import HomeWorkIcon from '@mui/icons-material/HomeWork';


const NewsBanner = () => {
    return (
        <Box sx={{ height: '30vh',marginTop:'-18px'
        }}>
             <Box sx={{
            backgroundImage:`url(${news2})`,
            
            backgroundSize:'cover',
            backgroundPosition:'bottom',
            height:'100%',
            opacity:'0.8',
            display:'flex',
            flexDirection:"column",
            width: '100vw',
            color:"white",
            
            justifyContent:'center',
            alignItems:"left",
            
            '&>*':{
                fontWeight:'bold',
                
               
                

            },
            
            
            
 
        }}>
            <Typography variant={'h5'} sx={{
                display:'flex',
                marginLeft:"25px"
          
            }}>Politics</Typography>
            <Box sx={{display:'flex',fontWeight:'bold','&>*':{
               
                
                fontWeight:'bold',
                marginLeft:"25px"
            }}}>
            <Typography sx={{color:"red",marginLeft:"25px"}}><HomeWorkIcon/>Home</Typography>
            <Typography>Politics</Typography>
            </Box>
         
        </Box>

        </Box>
       
        
    );
};

export default NewsBanner;