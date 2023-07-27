import React from "react";
import { Navbar } from 'react-bootstrap';

const navbarStyle = {
   backgroundColor:'lightblue'
};

const Header = () => {
    return (
        <Navbar style={navbarStyle} variant="light" data-bs-theme="light">
         <Container>
             <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
         </Container>
      </Navbar>
        )
}

export default Header;