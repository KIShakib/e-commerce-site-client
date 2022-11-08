import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState(false);
    const [loading, setLoading] = useState(true);


    // Sign-In By Using Users Google Account
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // Create New User By Using Gmail & Password
    const createUser = (gmail, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, gmail, password);
    }

    // Update User Profile
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }


    // SignIn With User Gmail & Password
    const loginUser = (gmail, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, gmail, password);
    }


    // Sign Out User
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // Set Logged User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            if (user === null) {
                setUser(loggedUser);
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, []);



    // Set Context API
    const authInfo = {
        user,
        signInWithGoogle,
        createUser,
        updateUserProfile,
        loginUser,
        logOut,
        loading,
        setLoading,
        theme,
        setTheme
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;