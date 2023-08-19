import React from 'react';
import {Box,Grid} from '@mui/material'
import NewsBanner from './NewsBanner';
import NewsBody from './NewsBody';

const News = () => {
    return (
        <Grid container>
            <Grid item xs={12} >
                <NewsBanner/>
               <NewsBody/>
              
            </Grid>

        </Grid>
    );
};

export default News;