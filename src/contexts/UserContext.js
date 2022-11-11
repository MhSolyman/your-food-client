import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile);
}


    const logOut = () => {
        return signOut(auth)
    }
    const signIn=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {

           
            setUser(currentuser)
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user,signIn,updateUserProfile, createUser,providerLogin, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;