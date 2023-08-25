import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


const DisplayProduct = () => {
    const [products, setProducts] = useState([
        {
            title: "I phone max" ,
            brand: "Apple",
            description: "iphone",
            price: "$999"

        },
        {
            title: "ISamsung max" ,
            brand: " Samsumg ",
            description: "samsung",
            price: "$1200"

        }

    ])


  return (

    <Card> 
        <Card.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
            <th>S.N</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product,index) =>{
            return ( 
                <tr key={index}>
                <td>{++index}</td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td> <Button variant="danger" size="xs">Delete</Button>{' '}</td>

                </tr>
            );
        })}
        
        
      </tbody>
    </Table>
        </Card.Body>
    </Card>


   
  )
}

export default DisplayProduct