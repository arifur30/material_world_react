import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetails } from "../../Service/api";
import { Box, Typography } from "@mui/material";
import textversion from "textversionjs";

const NewsDetails = () => {
const {id}=useParams();
    const [post,setPost]=useState({
        author:'',
        category:'',
        createOn:'',
        description:'',
        id:'',
        image:'',
        published_date:'',
        published_time:'',
        title:''
        
    });
    

  useEffect(() => {
    const getAll = async () => {
      const data = await getDetails(id);
      console.log(data)
      setPost(data)
      console.log(data);
    };
    getAll();
  }, [id]);

  return (
    <Box sx={{display:'flex',flexDirection:'column', paddingY:"10px",'&>*':{
        marginY:"10px"
    }}}>
        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", paddingX:'15px',marginY:"10px"}}>
        <img src={post.image} style={{width:'65%'}}/>
        <Box sx={{display:{xs:'flex',flexDirection:'column',md:'none'} ,justifyItems:'center', alignItems:"center", paddingTop:"5px", fontSize:"13px",'&>*':{
            
        }}}>
         <Typography sx={{display:"flex",fontSize:"13px",'&>*':{
            margin:'5px'
         }}}><b>Author: </b> <img src={post.author.image} style={{borderRadius:"50%",width:'25px', height:"25px"}} alt="pic"/><span>{post.author.name }</span></Typography>
         <Typography sx={{fontSize:'13px','&>*':{
            margin:'5px'
         }}}><b>Published:</b><span>{post.published_date}</span><span>{post.published_time}</span></Typography>
          
        </Box>
        <Box sx={{display:{md:'flex',xs:'none'} ,justifyItems:'center', alignItems:"center", paddingTop:"5px", fontSize:"13px",'&>*':{
            margin:'5px'
        }}}>
         <Typography sx={{display:"flex",fontSize:"13px",'&>*':{
            margin:'5px'
         }}}><b>Author: </b> <img src={post.author.image} style={{borderRadius:"50%",width:'25px', height:"25px"}} alt="pic"/><span>{post.author.name }</span></Typography><b>|</b>
         <Typography sx={{fontSize:'13px','&>*':{
            margin:'5px'
         }}}><b>Published:</b><span>{post.published_date}</span><span>{post.published_time}</span></Typography>
          
        </Box>
        <Typography variant="h3" sx={{}}>{post.title}</Typography>
       <div style={{textAlign:'justify' }}dangerouslySetInnerHTML={{ __html: post.description }}></div>
        

        </Box>
       
       
       
   

    </Box>
  );
};

export default NewsDetails;
