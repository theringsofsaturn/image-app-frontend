import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { MdMonochromePhotos } from "react-icons/md";
import { useLocation } from "react-router-dom";
export default function NavBar(props) {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ display: "flex", alignItems: "center" }}
        >
          <MdMonochromePhotos size={30} />
          <span style={{ marginLeft: "1em" }}> Image App</span>
        </Navbar.Brand>
        {location.pathname.includes("edit") ? (
          <Button variant="light" onClick={props.onSave}>
            Save
          </Button>
        ) : (
          <Button variant="light" onClick={props.onUpload}>
            Upload
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
