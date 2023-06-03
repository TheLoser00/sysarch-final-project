import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import "../style.css";

export default function LoginModal(props) {
  return (
    <div id="login-modal">
      <MDBModal show={props.show} setShow={props.setShow} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Login</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div class="input-group">
                <Form className="login-form">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div class="footer">
                  <MDBBtn className="login-modal-button" id="modal-save">login</MDBBtn>
                  </div>
                </Form>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
