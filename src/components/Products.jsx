import React from 'react'
import { Card, Button, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import product from '../components/product.jpg'

const Products = () => {
    return (
        <div style={{ height: "100vh" }}>
            <h1>Products</h1>
            <Container>
            <Card style={{ width: '18rem' }}>
            <Link to="/productdetail">
                <Card.Img variant="top" style={{width: "250px"}} src={product} />
                <Card.Body>
                    <Card.Title>Airpods Max</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="success">Buy</Button>
                </Card.Body>
            </Link>
            </Card>
            </Container>


        </div>
    )
}

export default Products
