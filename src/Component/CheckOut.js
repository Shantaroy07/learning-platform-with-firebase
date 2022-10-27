import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    return (
        <div className='container text-center mt-4'>
            <h5>Name of the Course: {course.name}</h5>
        </div>
    );
};

export default CheckOut;