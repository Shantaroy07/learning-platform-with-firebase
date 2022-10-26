import './Loginpage.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


function LogInPage() {

    const { providerLogIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='container flex flex-column  mt-4 mx-auto  text-center'>

            <div className="mb-3 ">
                <button onClick={handleGoogleSignIn} className="p-3 rounded-3   ">LogIn with Google</button>
            </div>
            <div className="mb-3 ">
                <button className="p-3 rounded-3"><Link className='text-decoration-none text-dark' to='/email'>LogIn with Email & Password</Link></button>
            </div>
            <div className="mb-3 ">
                <button className="p-3 rounded-3">LogIn With GitHub</button>
            </div>


        </div>
    );
}

export default LogInPage;