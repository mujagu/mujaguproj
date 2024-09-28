import {createContext, useState, useEffect} from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/navigation';
import Cookie from "js-cookie";
const swal = require('sweetalert2')
import axios from "axios";

const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = Cookie.get('authTokens');
        if (token) {
            setAuthTokens(JSON.parse(token));
            setUser(jwtDecode(token));
            } else {
                setAuthTokens(null)
                setUser(null)
            }
    },[]
        );

    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const loginUser = async (email, password, user_id) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                user_id, email, password
            })
        })
        const data = await response.json()
        console.log(data);
        // Cookie.set("userId", data.userId, {maxAge: 60 * 6 * 24 });

        if (response.status === 200) {
            console.log("Logged In");
            setAuthTokens(data);
            try {
                const decoded = jwtDecode(data.access);  // Ensure 'data.access' is a valid JWT token
                setUser(decoded);
                Cookie.set("authTokens", JSON.stringify(data));

                router.push("/dashboard");
                swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        } else {    
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "Username or passowrd does not exists",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

    const registerUser = async (email, username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, username, password, password2
            })
        })

        const responseData = await response.json();
        if(response.status === 201){
            router.push("/login")
            swal.fire({
                title: "Registration Successful, Login Now",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        } else {
            console.log(response.status);
            console.log("Response data:", responseData);
            console.log("there was a server issue");
            swal.fire({
                title: "An Error Occured " + response.status,
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        Cookie.remove("authTokens")
        router.push("/")
        swal.fire({
            title: "YOu have been logged out...",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
    }

    useEffect(() => {
        if (authTokens) {
            try {
                const decodedToken = jwtDecode(authTokens.access);
                setUser(decodedToken);
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        }
        setLoading(false);
    }, [authTokens]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )

}