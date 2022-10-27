import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';
import './Course.css'

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
                        categories.map(category => <p
                            className='text-decoration-none'
                            key={category.id}>
                            <Link to={`/courses/${category.id}`}>{category.name}</Link>
                        </p>)
                    }

                </div>
                <div className='col-8 '>
                    <div className='grid' >
                        {
                            categories.map(category => <Course
                                key={category.id}
                                category={category}></Course>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;