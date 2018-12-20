import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
            <img src="http://www.superhogar.net/wp-content/themes/starter-theme-master/images/logo.png" alt="Logo" />
        </Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav pullRight>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Buscar" />
              </FormGroup>{' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          <NavItem eventKey={1} href="#">
            Busco Comprar
          </NavItem>
          <NavItem eventKey={2} href="#">
            Busco Alquilar
          </NavItem>
          <NavItem eventKey={3} href="#">
            Contactenos
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;
