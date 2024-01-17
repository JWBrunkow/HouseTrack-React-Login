import axios from 'axios';

export async function loginUser(userDTO) {
    try {
        const response = await axios.post('http://localhost:8081/checkUser', userDTO);
        if (response.data && response.data.id) {
            window.location.href = `http://localhost:3000/?id=${response.data.id}`;
            return { isValid: true, error: null };
        } else {
            console.error('Authentication failed or no ID returned from server:', response.data);
            return { isValid: false, error: 'Authentication failed or no ID returned from server' };
        }
    } catch (error) {
        console.error(error);
        return { isValid: false, error: 'An error occurred while logging in' };
    }
}

export async function signUpUser(userDTO) {
    try {
        const response = await axios.post('http://localhost:8081/addUser', userDTO);
        if (response.data && response.data.id) {
            window.location.href = `http://localhost:3000/?id=${response.data.id}`;
            return { isRegistered: true, error: null };
        } else {
            console.error('No ID or Invalid username returned from server:', response.data);
            return { isRegistered: false, error: 'Invalid username or no ID returned' };
        }
    } catch (error) {
        console.error(error);
        return { isRegistered: false, error: 'An error occurred while signing up' };
    }
}
