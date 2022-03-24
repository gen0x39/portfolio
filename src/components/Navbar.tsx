import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link as Scroll } from 'react-scroll'

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}>
        <Toolbar>
          <Button color='inherit'>
            <Scroll to='about' smooth={true} duration={500} offset={-50}>ABOUT</Scroll>
          </Button>
          <Button color='inherit'>
            <Scroll to='skills' smooth={true} duration={500} offset={-50}>SKILLS</Scroll>
          </Button>
          <Button color='inherit'>
            <Scroll to='works' smooth={true} duration={500} offset={-50}>WORKS</Scroll>
          </Button>
          <Button color='inherit'>
            <Scroll to='outputs' smooth={true} duration={500} offset={-50}>OUTPUTS</Scroll>
          </Button>
          <Button color='inherit'>
            <Scroll to='contact' smooth={true} duration={500} offset={-50}>CONTACT</Scroll>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;