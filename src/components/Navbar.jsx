import React, {useState} from "react";
import {
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBNavbarItem
} from "mdb-react-ui-kit";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import Login from "../pages/Login"
import "../style.css";

export default function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <>
      <Navbar className="navbar" expand="lg" id="navbar">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img src={logo} height="50" alt="" loading="lazy" />
            Seekr
          </MDBNavbarBrand>
          <div className="navbar-buttons">
          <MDBNavbarItem className="navbar-item" style={{cursor: "pointer"}}>
            Learn
          </MDBNavbarItem>
          <MDBNavbarItem className="navbar-item">
            <MDBNavbarLink onClick={toggleShow}>Login</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className="navbar-item">
            <MDBNavbarLink href="/register">Register</MDBNavbarLink>
          </MDBNavbarItem>
          </div>
        </MDBContainer>
      </Navbar>
      <Login
      show={basicModal} 
      toggleShow={toggleShow}
      setShow={setBasicModal}
      />
    </>
    
  );
}
