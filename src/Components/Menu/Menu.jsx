import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import flask from "../../img/flaskWhite.png";

import "./menu.css";

function Menu() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary bgmenu">
      <Container fluid>
        <img src={flask} width={"50px"} />
        <h1 style={{ paddingLeft: "10px" }}>BIOVIDA</h1>
        {/* <Navbar.Toggle/> */}
        <Navbar.Offcanvas>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#logar">
                  <h5 style={{ color: "white", fontWeight: "bold" }}>
                    VERIFICAR EXAME
                  </h5>
                </Nav.Link>
              </Nav>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#logar">
                <h5 style={{ color: "white", fontWeight: "bold" }}>
                  VERIFICAR EXAME
                </h5>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Menu;
