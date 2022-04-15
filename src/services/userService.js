import axios from "../axios";

// Cách 1: viết tắt
// const handleLoginApi = (email, password) => {
//     return axios.post('/api/login', { email, password });

// }

// Cách 2: 
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });

}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUserService = (data) => {
    console.log("Check data from sevice:", data);
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId });
    return axios.delete('/api/delete-user', {
        // headers: {
        //     Authorization: authorizationToken
        // },
        data: {
            id: userId
        }
    });
}

const EditUserService = (inputData) => {
    // return axios.delete('/api/delete-user', { id: userId });
    return axios.put('/api/edit-user', inputData);
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    EditUserService
}

