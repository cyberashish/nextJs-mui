"use client"

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from "/public/images/logo.png"
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { styled, alpha } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from '@iconify/react';
import theme from "../../../CustomTheme/theme"

const LinkStyled = styled(Link)(({theme})=>({
   textDecoration:"none",
   color:theme.palette.secondary.main,
   '&:hover':{
    color:theme.palette.primary.main
   }
}))
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "6px",
  border:`1px solid #edebe4`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  fontWeight:400,
  fontSize:"12px",
  '&::placeholder':{
    fontWeight:300,
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      '&:focus': {
        width: '38ch',
      },
    },
  },
}));

const Header:React.FC = () => {
  return (
    <>
        <CssBaseline />
      <Container disableGutters maxWidth="lg">
         <Box sx={{display:"flex",justifyContent:"space-between",py:2,px:2,alignItems:"center"}}>
            <Image src={logo} alt='image' />
            <List sx={{display:"flex" , gap:2}}>
              {NAV_LINKS.map((navlink)=>{
                return(<ListItemText key={navlink.key}>
                  <LinkStyled href={navlink.href}>
                  {navlink.label}
                  </LinkStyled>
                  </ListItemText>)
              })}
            </List>
            <Stack direction="row" spacing={3} alignItems="center">
            <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"#d1cfc9" , fontSize:"20px"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for Products, brands and more..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Stack direction="row" spacing={2}>
          <LinkStyled href="/"><Icon icon="carbon:user" style={{fontSize:"24px"}} /></LinkStyled>
          <LinkStyled href="/"><Icon icon="mdi:cart-plus" style={{fontSize:"24px"}} /></LinkStyled>
          </Stack>

            </Stack>
         </Box>
      </Container>
    </>
  )
}

export default Header
