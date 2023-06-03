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
  MDBFile,
} from "mdb-react-ui-kit";

import "../style.css";

export default function UploadResume(props) {
  return (
    <div id="modal">
      <MDBModal show={props.show} setShow={props.setShow} tabIndex="-1" >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Upload Resume</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="modal-box">
                <div id="customFile">
                  <MDBFile label="Upload File" />
                </div>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={props.toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn id="modal-save">Submit</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
