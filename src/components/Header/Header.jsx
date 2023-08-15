import {Navbar,Container} from 'react-bootstrap';
const Header=()=> {
    return (
      <header style={{marginBottom:'20px'}}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Weather App</Navbar.Brand>
        </Container>
      </Navbar>
      </header>
    )
  }
  
  export default Header;