import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
export const UserContext = createContext(null)
const auth = getAuth(app);
const AuthContext = ({children}) => {
const [user,setUser] =useState()
const [loading,setLoading]=useState(true)

const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  
}
const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  
}

const logout = ()=>{
    setLoading(true)
   return signOut(auth)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false);
      });

      return ()=>{
        unSubscribe();
      }
},[])

    const data = {
        user,
        login,
        createUser,
        loading,
        logout
    }
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;