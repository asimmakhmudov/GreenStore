import React from 'react'
import { Card, CardGroup, ListGroup, Button } from 'react-bootstrap';
import product from '../components/product.jpg'
import '../index.css'

const Popup = props => {
    return(
            <div className='productBody'>
                <Card className='productPopUp'>
                    <Card.Title className='popupTitle'>Hissə-hissə ödəniş <Button variant='danger' style={{borderRadius: "50%"}} onClick={props.handleClose}>X</Button>{props.content}</Card.Title>
                    <Card.Body>
                        <Card.Body className='popupInside'>
                            <img src={product} />
                            <Card.Text className='productName'>
                                <Card.Subtitle className="mb-2 text-muted">Qulaqlıqlar</Card.Subtitle>
                                <Card.Text>Apple Airpods Max</Card.Text>
                            </Card.Text>
                            <CardGroup className='cartcount'>
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </CardGroup>
                            <Card.Text className='productPrice'>$500.9</Card.Text>
                        </Card.Body>
                        <Card.Body className='monthCircle'>
                            <button><a href="#">6 ay</a></button>
                            <button><a href="#">9 ay</a></button>
                            <button><a href="#">12 ay</a></button>
                            <button><a href="#">15 ay</a></button>
                            <button><a href="#">18 ay</a></button>
                            <button><a href="#">24 ay</a></button>
                        </Card.Body>
                        <Card.Body className='selectedMonth'>
                            <ListGroup horizontal className='monthlist'>
                                <li>Müddət</li>
                                <li>İlkin ödəniş</li>
                                <li>Aylıq ödəniş</li>
                            </ListGroup>
                            <ListGroup horizontal className='monthlist monthDetail'>
                                <li>6 ay</li>
                                <li>0 azn</li>
                                <li>10 azn</li>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className='productfoot'>
                            <Card.Text className='text'>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus asperiores architecto placeat,</span>
                            </Card.Text>
                            <Button className='submitbtn' variant='success'>Sifarişi rəsmiləşdir</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
    )
}

export default Popup;
