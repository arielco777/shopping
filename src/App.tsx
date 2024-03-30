// import { useEffect, useState } from "react";
// import Auth from "./components/auth";
// import { db, auth, storage } from "./config/firebase";
// import {
//     getDocs,
//     collection,
//     addDoc,
//     deleteDoc,
//     doc,
//     updateDoc,
// } from "firebase/firestore";
// import { ref, uploadBytes } from "firebase/storage";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

const App: React.FC<{}> = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="h-screen flex flex-col justify-between">
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-white ${
                    loading
                        ? "opacity-100 z-[100]"
                        : "opacity-0 invisible z-[-1]"
                } transition-all duration-1000 flex justify-center items-center`}
            >
                <h1
                    className={`border border-neutral-700 ${
                        loading
                            ? "lg:py-20 lg:px-20 py-[20vh] px-[10vw]"
                            : "px-[50vw] py-[50vh]"
                    } transition-all whitespace-nowrap duration-1000`}
                >
                    Welcome to the future of design
                </h1>
            </div>
            <NavBar />
            <div className="lg:py-0 pb-16 flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
