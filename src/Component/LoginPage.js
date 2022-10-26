import './Loginpage.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function LogInPage() {

    const { providerLogIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='container flex flex-column  mt-4 mx-auto  text-center login p-4 '>

            <div className="mb-3 ">
                <button onClick={handleGoogleSignIn} className="p-3 rounded-3"> <FaGoogle></FaGoogle> LogIn with Google</button>
            </div>
            <div className="mb-3 ">
                <button className="p-3 rounded-3"><Link className='text-decoration-none text-dark' to='/login/email'><MdEmail></MdEmail> LogIn with Email & Password</Link></button>
            </div>
            <div className="mb-3 ">
                <button onClick={handleGithubSignIn} className="p-3 rounded-3"><FaGithub></FaGithub> LogIn With GitHub</button>
            </div>


        </div>
    );
}

export default LogInPage;