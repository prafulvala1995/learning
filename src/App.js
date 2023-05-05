import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { Button, Stack } from 'react-bootstrap';

function App() {
  return (

    <>

      {/* Main Header Start */}

      <div class="coldark">
        <div class="top-header d-flex  just">
          <ul>
            <li className='d-flex'>
              <p>Working Hour: 08.00am - 09.00pm</p>
              <p><HiOutlineMail></HiOutlineMail> Email <a href='#'> info@example.com</a></p>
            </li>
          </ul>
          <ul>
            <li className='d-flex'>
              <p>
                <FaFacebookF></FaFacebookF>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
                <TfiYoutube></TfiYoutube>
              </p>
              <p>12 North Thompson Street Richmond, VA 23221</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Header End */}


      {/* Logo Header Start */}

      <div className='logo-header'>
        <div className='main-logo'>

          <Navbar collapseOnSelect expand="lg" bg="lidht" variant="light">
            {/* <Container> */}
            <a>TishClinic</a>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
          </Navbar>

        </div>
      </div>

      {/* Logo Header End*/}
      {/*  Slider Start*/}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./img/asset 18.jpeg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./img/asset 19.jpeg')}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*  Slider End*/}

      {/* Card start */}
      <div className='bg-space d-flex'>
        <Card style={{ width: '18rem' }} className='margin'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='margin'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='margin'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className='bg-space d-flex'>
        <Card style={{ width: '18rem' }} className='margin'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='margin'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='margin'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      {/* Card End */}


    </>
  );
}

export default App;
