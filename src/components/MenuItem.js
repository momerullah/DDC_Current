import React from 'react';
import { Card } from 'react-bootstrap';

const MenuItem = ({ name, prices }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {prices.map((price, index) => (
                    <Card.Text key={index}>{price}</Card.Text>
                ))}
            </Card.Body>
        </Card>
    );
};

export default MenuItem;
