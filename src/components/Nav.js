import React,{useState} from "react";
import { Navbar, Container, Form, Button, FormControl } from "react-bootstrap";


export default function Nav({search,setSearch}) {
  const [text,setText] = useState(search ? search : '')

  const handleSubmit = (e) =>{
    e.preventDefault()
    setSearch(text === "" ? null : text)
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
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
