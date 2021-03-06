import Head from 'next/head';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => (
    <div>
      <Head>
        <title>Events app</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Google styles */}
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container">
                <Navbar.Brand href="/">Events app</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Events" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/business">Event 1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/technology">Event 2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>  
      
    </div>
  );
  
  export default Header;