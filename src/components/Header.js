import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button, NavDropdown, MenuItem} from 'react-bootstrap';


class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    // this.props.onClick(e);
    console.log("hola");
  }
  
  render() {
    return (
      <Navbar>
        <Navbar.Header>
            <img src="https://www.superhogar.net/wp-content/themes/starter-theme-master/images/logo-superhogar-website.png" alt="Logo" />
        </Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav pullRight>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Buscar" />
              </FormGroup>{' '}
              <Button type="submit">Buscar</Button>
            </Navbar.Form>
            <NavDropdown eventKey={1} title="Busco" id="basic-nav-dropdown">
               <MenuItem eventKey={1.1} onClick={event => alert('hola')}>Comprar</MenuItem>
              <MenuItem eventKey={1.2} onClick={this.handleClick}>Alquilar</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Tipo" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Apartamento</MenuItem>
              <MenuItem eventKey={2.2}>Casa</MenuItem>
              <MenuItem eventKey={2.3}>Local Comercial</MenuItem>
              <MenuItem eventKey={2.4}>Solar</MenuItem>
            </NavDropdown>
            <NavDropdown eventkey={3} title="Precio" id="basic-nav-dropdown">
              <MenuItem eventkey={3.1}>2,000,000 - 3,000,000</MenuItem>
            </NavDropdown>
            <NavItem eventkey={3} href="#">
              Contactenos
            </NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;
