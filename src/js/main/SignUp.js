import React, { useState } from 'react';
import { signUpUser } from '../utils/auth';
import '../../css/Signup.css';

function Signup({ hideForms }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const userDTO = {
            username: username,
            email: email,
            password: password,
        };

        const { error } = await signUpUser(userDTO);
        if (error) setError(error);
    };

    return (
        <div className="task-input">
            <span className="close-icon" onClick={hideForms}>&#10006;</span>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}

export default Signup;
