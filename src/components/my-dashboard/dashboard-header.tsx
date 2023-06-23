import {
  Button,
  Card,
  Container,
  Form,
  Nav,
  NavDropdown,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Offcanvas,
} from "react-bootstrap";

interface DashBoardHeaderProps {}

const DashBoardHeader = (props: DashBoardHeaderProps) => {
  let expand = false;
  return (
    <>
      <Navbar
        key={"expand"}
        bg="light"
        expand={expand}
        className="header-height mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">My DashBoard</Navbar.Brand>
          <div className="d-flex justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement={"end"}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <div className="row">
                  {[
                    "#f1faff",
                    "#ffeff3",
                    "#fff8dd",
                    "#eff2f5",
                    "#f6f1fc",
                    "#fff8dd",
                    "#f1faff",
                    "#f1faff",
                  ].map((variant) => (
                    <Card
                      key={variant}
                      text={"dark"}
                      style={{
                        maxWidth: "max-content",
                        marginRight: "4px",
                        backgroundColor: variant,
                      }}
                      className="mb-2 mr-5"
                    >
                      <Card.Body>
                        <Card.Title>{variant}</Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default DashBoardHeader;
