import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("Response from signin: ", response);
        } catch (err) {
            console.error("Error signin: ", err);
        }
    };

    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error("Error google:", err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error("Error Logout: ", err);
        }
    };

    return (
        <div>
            <input
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign in</button>

            <button onClick={googleSignIn}>Google Sign In</button>

            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Auth;
