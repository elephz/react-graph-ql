import React,{useState} from "react";
import { Navbar, Container, Form, Button, FormControl } from "react-bootstrap";


export default function Nav({search,setSearch}) {
  const [text,setText] = useState(search)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setSearch(text)
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Media</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div
            className="me-auto my-2 my-lg-0"
          >
            {/* <Link to="/create">create new media</Link> */}
          </div>
          <Form className="d-flex" onSubmit={(e)=>handleSubmit(e)}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={(e)=>setText(e.target.value)}
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
