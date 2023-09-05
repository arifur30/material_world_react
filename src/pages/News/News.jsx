import React, { useEffect, useState } from 'react';
import {Box,Grid} from '@mui/material'
import NewsBanner from './NewsBanner';
import NewsBody from './NewsBody';
import { useParams } from 'react-router-dom';
import { getDatabyCat } from '../../Service/api';

const News = () => {
    const [news,setNews]=useState([]);
    const {cat}=useParams();
 
    console.log(cat);
    useEffect(()=>{
        const getData=async()=>{
            const data=await getDatabyCat(cat);
            setNews(data);
            console.log(data);

        }
        getData()

    },[])
    return (
        <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={12} >
                <NewsBanner cat={cat}/>
               <NewsBody news={news}/>
              
            </Grid>

        </Grid>
    );
};

export default News;