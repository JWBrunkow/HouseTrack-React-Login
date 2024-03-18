import axios from 'axios';

const baseURL = 'http://ec2-3-8-193-120.eu-west-2.compute.amazonaws.com:8081';

export async function loginUser(userDTO) {
    try {
        const response = await axios.post(`${baseURL}/checkUser`, userDTO);
        if (response.data && response.data.id) {
            window.location.href = `/?id=${response.data.id}`;
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
        const response = await axios.post(`${baseURL}/addUser`, userDTO);
        if (response.data && response.data.id) {
            window.location.href = `/?id=${response.data.id}`;
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
