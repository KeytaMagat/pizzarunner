import * as React from 'react';
import './LStyle.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-scroll';
import { useState } from 'react';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
  
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const navigate = useNavigate()

  return (
    <AppBar className='HeadBar' position="sticky" 
      style={{
        backgroundColor: "#E9E9E9",
        paddingBlock: "2vh",
        boxDecorationBreak: "revert"}}
      >
      <Container className='AppCon' maxWidth="xl" 
        style={{
          paddingInline: "10vh",
          display: "block"
        }} >
        <Toolbar disableGutters sx={{display: "flex"}}>
          <Stack direction="row" marginRight={7}>
            <Button disabled>
              <img className="imgLogo" src="./src/images/PIZZA_LOGO.gif" alt="Pizza Runner"/>
            </Button>
            <Button>
              <Box sx={{ 
                  width: 100,
                  m: 1,
                  textAlign: 'left', 
                  letterSpacing: 6
                  }}> 
                <h3 style={{fontWeight: "800"}}>
                  PIZZA RUNNER
                </h3>
              </Box>
            </Button>
          </Stack>
          <Stack display="flex" direction="row" spacing={7}>
            <Button  onClick={() => navigate('')}>
              <Box sx={{ letterSpacing: 6, m: 1 }}> <h3>Home</h3> </Box>
            </Button>
            <Button id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <Box sx={{ letterSpacing: 6, m: 1 }}> <h3>Menu</h3> </Box>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link to="meatlover"
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={700}
                onClick={closeMenu}>
                  <MenuItem onClick={handleClose}> Meat Lover </MenuItem>
              </Link>
              <Link to="vegetarian"
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={700}
                onClick={closeMenu}>
                  <MenuItem onClick={handleClose}> Vegetarian </MenuItem>
              </Link>
              <Link to="beefx3"
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={700}
                onClick={closeMenu}>
                  <MenuItem onClick={handleClose}> Beef-Beef-Beef </MenuItem>
              </Link>
            </Menu>
            <Button >
              <Box sx={{ letterSpacing: 6, m: 1 }}> <h3>About</h3> </Box>
            </Button>
          </Stack>

          <Container maxWidth="fixed" 
            style={{
              display: "flex",
              justifyContent: "right" 
              // backgroundColor: "red"
            }}>
            <Avatar onClick={() => navigate('login')}
                sx={{ 
                // bgcolor: "grey", 
                paddingBlock: 2, 
                paddingX: 2
              }}>
                <AccountCircleIcon sx={{width: 50, height: 50}}/>
            </Avatar>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}