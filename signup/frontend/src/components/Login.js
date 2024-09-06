import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     // Define the callback function after the script is loaded
    //     window.googleTranslateElementInit = function() {
    //         new window.google.translate.TranslateElement({
    //             pageLanguage: 'en', // Default page language
    //             includedLanguages: 'ach,lg,es,en,fr,sw',
    //             // layout: google.translate.TranslateElement.InlineLayout.SIMPLE // Simple dropdown layout
    //         }, 'google_translate_element');
    //     };

    //     return () => {
    //         // Cleanup script if component is unmounted
    //         document.body.removeChild(script);
    //     };
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/login/', {
                username,
                password,
            });
            setToken(response.data.key);
            window.location.href='/'
            alert('Login successful');
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div>
            {/* <div id="google_translate_element"></div> */}
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
