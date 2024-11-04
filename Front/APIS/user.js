import axios from 'axios'
import Header from './../components/header/index';

export async function login(email, password) {
    try {
        const response = await axios.post("http://localhost:5000/auth/login", { email, password });
        if (response.status == 200) {
            return response.data;
        }

    } catch (error) {
        if (error.status == 404) {

            return { email: 'User With this email does not exist' };
        }
        else if (error.status == 401) {
            return { password: "Invalid Password" };
        }
    }
}
export async function getUser() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        else {
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            const response = await axios.get('http://localhost:5000/user/getuser', { headers })
            if (response.status == 200) {
                return response.data;
            }
        }
    } catch (error) {
        return false;
    }
}

export async function register(data) {
    console.log(data);
    try {
        const response = await axios.post('http://localhost:5000/user/register', data)
        if (response.status == 201) {
            return { success: "User Registered" };
        }
    } catch (error) {

        if (error.status == 409) {

            return { email: "User with this email already exists" }
        }
        else {
            return { message: "Registration failed" };
        }
    }
}


export async function forgotPassword(email) {
    try {
        const respnse = await axios.post('http://localhost:5000/auth/forgetPassword', { email });
        if (respnse.status == 201) {
            return { success: "Link has been sent" }
        }
    }
    catch (error) {
        if (error.status == 404) {
            return { email: "User not found" }
        }
    }
}


export async function resetPassword(tokenPass, newPassword) {
    try {
        const headers = {
            'Authorization': `Bearer ${tokenPass}`
        }
        const response = await axios.post('http://localhost:5000/auth/resetPassword', { newPassword }, { headers })
        if (response.status == 201) {
            return { success: "Password Changed Successfully" };
        }
    } catch (error) {
        if (error.status == 409) {
            return { password: "New Password can't be the same old Password" }
        }
        else if (error.status == 400)
            return { failure: "Link Already Used Or Expired" }
    }
}