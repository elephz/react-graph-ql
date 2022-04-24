import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Spin() {
  return (
    <Spinner animation="border" role="status" className='mx-auto d-block'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
