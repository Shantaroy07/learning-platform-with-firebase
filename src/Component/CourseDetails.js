

import Button from 'react-bootstrap/Button';

import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const course = useLoaderData();

  return (
    <div className='container mx-auto my-3'>
      <h3>Details About This Course</h3>
      <img src={course.img} alt="" />
      <h4>Course Name: {course.name}</h4>
      <h6>Details: {course.details}</h6>
      <p>Course Duration: {course.duration}</p>

      <Button  ><Link className='text-decoration-none text-light' to={`/checkout/${course.id}`}>Get premium access</Link> </Button>
    </div>
  );
};

export default CourseDetails;