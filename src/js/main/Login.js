import React, { useState } from 'react';
import { loginUser } from '../utils/auth';
import '../../css/Login.css';

function Login({ hideForms }) {
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const isEmail = /\S+@\S+\.\S+/.test(input);
        const userDTO = {
            username: isEmail ? null : input,
            email: isEmail ? input : null,
            password: password,
        };
        const { isValid, error } = await loginUser(userDTO);
        if (error) setError(error);
        if (!isValid && !error) setError('Invalid Login Details');
    };

    return (
        <div className="task-input">
            <span className="close-icon" onClick={hideForms}>&#10006;</span>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username/Email"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}
export default Login;
