import React from 'react'
import { Col,Card } from 'react-bootstrap'
// import "./CardItem.css"
export default function CardItem({image,name,id}) {
  return (
    <Col>
      <Card className='shadow-sm'>
        <Card.Img variant="top" src={image} className="img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}
