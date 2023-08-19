import React from 'react';
import {Box,Button,InputBase, Typography} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Recent from './Recent';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border:'1px solid grey',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'light-grey',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:'black',
    color:'white'
  }));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft:`calc(2em + ${theme.spacing(4)})`,
      
      margin:'2px',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  


const NewsBodyRight = () => {
    return (
        <Box sx={{margin:"50px",display:'flex',flexDirection:'column','&>*':{
            marginBottom:'10px'
        }}}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box>
          <Box sx={{borderBottom:'2px solid black'}}>
            <Typography sx={{ background:'black',color:'white',fontWeight:'bold',width:'150px',marginBottom:'0px',padding:'10px',marginTop:'50px',marginLeft:'5px'}}>Latest Update</Typography>
            <hr style={{backgroundColor:'black',}}/>


          </Box>
          <Box sx={{marginTop:'20px','&>*':{
            background:'lightgrey',
            color:'black',
            borderRadius:'0px',
            border:'1px solid grey',
            padding:"10px"
          }}}>
            <Button  >RECENT</Button>
            <Button >POPULAR</Button>
            <Button >COMMON</Button>
          </Box>
          <Recent></Recent>
          <Recent></Recent>
          <Recent></Recent>
          <Recent></Recent>
          <Recent></Recent>
          
        </Box>

          </Box>
          
    );
};

export default NewsBodyRight;