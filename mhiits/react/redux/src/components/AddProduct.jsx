import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


import Card from 'react-bootstrap/Card';


const AddProduct = () => {
    const [product, setProduct] = useState(
        {
            title: " ",
            price: " ",
            description: " ",
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(product);

        setProduct({
            title: "",
            price: "",
            description: ""
        });
    }



    return (

        <Card>
            <Card.Body>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name"
                            value={product.value}
                            onChange={(event) => setProduct({ ...product, title: event.target.value })
                            } 
                            />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter product price"  
                            value={product.value}
                            onChange={(event) => setProduct({ ...product, price: event.target.value })
                            } />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Description on here"
                            type="text"
                            as= "textarea"
                            value={product.value}
                            onChange={(event) => setProduct({ ...product, description: event.target.value })
                            } />
                    </Form.Group>





                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Card.Body>
        </Card>



    )
}

export default AddProduct