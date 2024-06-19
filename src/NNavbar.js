import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const NNavBar = () => {
  return (
<section className='navbar'>
<Navbar collapseOnSelect expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><img src="/Images/Mainlogo.png" width="200px"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
<NavDropdown className='navlinkss' title="Inventory">
<NavDropdown.Item href="#viewallinventory/3.1" >View all inventory</NavDropdown.Item>
            <NavDropdown.Item  href="#valueyourtrade">
              KBB instant cash offer!
            </NavDropdown.Item>
            <NavDropdown.Item  href="#UsedCars">Used Cars Specialist</NavDropdown.Item>
</NavDropdown>
          <Nav.Link className='navlinkss' href="#pricing">Pricing</Nav.Link>
          <NavDropdown className='navlinkss' title="About Us" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#experience">Exotics Cars Experience</NavDropdown.Item>
            <NavDropdown.Item href="#directions/3.2">
Hours and directions          
  </NavDropdown.Item>
            <NavDropdown.Item href="#contact/3.3">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link className='navbarphone' href="#Phone"><PhoneIcon className='phonenavbar'/> <br></br> (+20)102423022</Nav.Link>
          <Nav.Link eventKey={2} href="#memes"  ><AddLocationAltIcon className='locationnavbar'/> <br/>
           Your Directions
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</section>
    
  );
}


export default NNavBar