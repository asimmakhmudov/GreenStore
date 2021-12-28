import React from 'react'
import Popup from './Popup';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div style={{height: "100vh"}}>
            <div className="App">
                <Button style={{ margin: "20px" }} variant='success' onClick={togglePopup}>Add to card</Button>
                {isOpen && <Popup handleClose={togglePopup} />}
            </div>
        </div>
    )
}

export default ProductDetail