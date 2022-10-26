
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { providerLogIn, createUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;


