import { useState } from "react";
import {auth, googleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'

export const Auth = ()=>{
    const [eamil, setEamil] = useState('');
    const [Password, setPassword] = useState("");

    const signIn = async()=>{
        try {
            await createUserWithEmailAndPassword(auth,eamil,Password);
        } catch (error) {
            console.log(error);
        }
        

    }

    const logout = async()=>{
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
        
    }

    const signInWIthGoogle = async()=>{
        try {
            await signInWithPopup(auth,googleProvider);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <input placeholder="Email...." type="email" value={eamil} onChange={(e)=>setEamil(e.target.value)} />
            <input placeholder="Password...." type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={signIn}>SignIn</button>
            <button onClick={signInWIthGoogle}>Sign In with Google</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}