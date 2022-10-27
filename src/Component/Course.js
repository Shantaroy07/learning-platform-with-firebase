import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Course = ({ category }) => {
    const { name, img, id } = category;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button><Link className='text-decoration-none text-light ' to={`/courses/${id}`}> Go For Details</Link> </Button>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Course;