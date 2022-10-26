import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <p>Blog</p>

        </div>
    );
};

export default Header;