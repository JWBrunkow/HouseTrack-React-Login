import axios from 'axios';

export async function loginUser(userDTO) {
    try {
        const response = await axios.post('http://localhost:8081/checkUser', userDTO);
        if (response.data) {
            window.location.href = 'http://localhost:3000';
        }
        return { isValid: response.data, error: null };
    } catch (error) {
        console.error(error);
        return { isValid: false, error: 'An error occurred while logging in' };
    }
}

export async function signUpUser(userDTO) {
    try {
        const response = await axios.post('http://localhost:8081/addUser', userDTO);
        if (response.data) {
            window.location.href = 'http://localhost:3000';
        }
        return { isRegistered: response.data, error: response.data ? null : 'Invalid username' };
    } catch (error) {
        console.error(error);
        return { isRegistered: false, error: 'An error occurred while signing up' };
    }
}
