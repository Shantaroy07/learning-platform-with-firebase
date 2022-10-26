import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Component/home';
import Courses from '../Component/courses';
import Login from '../Component/Login';
import Register from '../Component/Register';
import LogInPage from '../Component/LoginPage';


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
                path: '/email',
                element: <Login></Login>,

            },

            {
                path: '/signup',
                element: <Register></Register>,

            },
            {
                path: '*',
                element: <div>This route is not found.</div>
            }
        ]
    }
])