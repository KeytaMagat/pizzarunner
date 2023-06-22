import * as React from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react';
import { Box, Button, Grid, Tab, Tabs } from '@mui/material';

export default function NavLink() {

  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)

  return (
    <div>
        <Box mt={2} 
            mr={20} 
            width={500} 
            display={"flex"}
            justifyContent={"center"}
            
        >
        <Button>
            <Link to="meatlover"
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={700}
                onClick={closeMenu}
            >
                <h3>MEAT LOVER</h3>
            </Link>
        </Button>
        <Button>
            <Link to="vegetarian"
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={700}
                onClick={closeMenu}
            >
                <h3>VEGETARIAN</h3>
            </Link>
        </Button>
        <Button>
            <Link to="beefx3"
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={700}
                onClick={closeMenu}
            >
                <h3>BEEFX3</h3>
            </Link>
        </Button>
        </Box>
    </div>
  )
}
