import React from 'react';
import { Box, Typography } from '@mui/material';
import pic from './assests/news.jpg'
import PersonIcon from '@mui/icons-material/Person';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import moment from 'moment/moment';
import textVersion from 'textversionjs'
import { Link } from 'react-router-dom';
const NewsBodyLeft = ({item}) => {
    console.log(item)
    return (
        <>
        <Box sx={{margin:"50px 60px", display:{xs:"none",md:'flex'}}}>
            <Box sx={{width:'40%',}}>
                <img src={item.image} width={'100%'} height={'100%'} alt="pic"/>

            </Box>
            <Box sx={{width:'60%',padding:"10px",margin:"0px 20px",}}>
                <Box sx={{display:"flex", flexDirection:'row','&>*':{
                    margin:'10px',
                    color:"grey",
                    fontSize:"14px"
                }}}>
                    <Typography><PersonIcon/> Admin</Typography>
                    <Typography><AccessAlarmsIcon/>{item&&moment(item.createdAt).format("LL")}</Typography>
                </Box>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>{item&&item.title}</Typography>
                
                <Typography sx={{marginTop:"10px",fontSize:'15px'}}>{textVersion(item.description.substr(0,300))+'...'}</Typography>
                <Link to={`/news/details/${item.id}`}><Typography sx={{color:"red"}}>[click here to read details]</Typography></Link>
               

            </Box>
        </Box>
        <Box sx={{margin:"50px 30px",  display:{xs:"flex",md:'none',flexDirection:'column'}}}>
            <Box sx={{}}>
                <img src={item.image} width={'100%'} height={'100%'}/>

            </Box>
            <Box sx={{width:'100%',padding:"10px",margin:"0px 20px",}}>
                <Box sx={{display:"flex", flexDirection:'row','&>*':{
                    margin:'10px',
                    color:"grey",
                    fontSize:"14px"
                }}}>
                    <Typography><PersonIcon/> Admin</Typography>
                    <Typography><AccessAlarmsIcon/> September 20,2018</Typography>
                </Box>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>The company behind vespa built a cargo robot that follows you around</Typography>
                <Typography sx={{marginTop:"10px",fontSize:'15px'}}>{textVersion(item.description.substr(0,300))+'...'}</Typography>
                <Link to={`/news/details/${item.id}`}><Typography sx={{color:"red"}}>[click here to read details]</Typography></Link>

            </Box>
        </Box>
        </>
    );
};

export default NewsBodyLeft;