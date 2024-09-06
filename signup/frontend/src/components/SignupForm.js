import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [coverPhoto, setCoverPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('bio', bio);
        if(profilePic) formData.append('profile_pic', profilePic);
        if(coverPhoto) formData.append('cover_photo', coverPhoto);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/signup/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window.location.href('/')
            alert("Signup successful!");
        } catch (error) {
            console.error("There was an error signing up:", error.response.data);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>
                <div>
                    <label>Profile Pic:</label>
                    <input type="file" onChange={(e) => setProfilePic(e.target.files[0])} />
                </div>
                <div>
                    <label>Cover Photo:</label>
                    <input type="file" onChange={(e) => setCoverPhoto(e.target.files[0])} />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
