import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='container '>
            <div className='row'>
                <div className='col-4'>
                    {
                        categories.map(category => <p key={category.id}>
                            <Link>{category.name}</Link>
                        </p>)
                    }

                </div>
                <div className='col-8'>

                </div>
            </div>
        </div>
    );
};

export default Courses;