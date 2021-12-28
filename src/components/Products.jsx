import React, { useState } from 'react'
import { Card, Button, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Products = () => {

    const [products, setProducts] = useState([]);
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    return (
        <div className='ProductS'>
            <Container className='row'>
                <h1>All Products</h1>
                {products.map((product) => (
                    <div className='col-sm cont'>
                        <Card className='proCont' key={product.id}>
                            <Link className='productLink' to={`/productdetail/${product.id}`}>
                                <Card.Img variant="top" className='prodimg' src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.category}
                                    </Card.Text>
                                    <Button variant="warning">{product.price}$</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default Products
