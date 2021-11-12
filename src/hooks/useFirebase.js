import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        })

        return () => unsubscribed;

    }, [auth])

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://fierce-lake-75301.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // checking is admin or not
    useEffect(() => {
        fetch(`https://fierce-lake-75301.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
            .catch(err => {
                console.log(err);
            })
    }, [user?.email])


    return {
        user,
        admin,
        signInUsingGoogle,
        logout,
        isLoading,
        saveGoogleUser
    }
}

export default useFirebase;