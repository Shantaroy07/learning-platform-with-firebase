import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Component/home';
import Courses from '../Component/courses';
import Login from '../Component/Login';
import Register from '../Component/Register';
import LogInPage from '../Component/LoginPage';
import Blog from '../Component/Blog';
import CourseDetails from '../Component/CourseDetails';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,

            },

            {
                path: '/login',
                element: <LogInPage></LogInPage>,

            },
            {
                path: '/login/email',
                element: <Login></Login>,

            },

            {
                path: '/signup',
                element: <Register></Register>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

            },
            {
                path: '*',
                element: <div>This route is not found.</div>
            }
        ]
    }
])