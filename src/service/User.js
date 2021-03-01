import axios from 'axios';

const BASE_URL = 'https://reqres.in/api/users';

const User = {
    getUsers: () => {
        return axios({
            url: BASE_URL,
            method: 'GET',
            params: {
                page: 1,
                per_page: 20
            }
        })
    },
    viewUser: (id) => {
        return axios({
            method: 'GET',
            url: `${BASE_URL}/${id}`
        })
    },
    createUser: ( email, firstName, lastName) => {
        return axios({
            method: 'POST',
            url: BASE_URL,
            data: {
                email,
                firstName,
                lastName
            }
        })
    },
    editUser: (id, email, firstName, lastName) => {
        return axios({
            method: 'PUT',
            url: `${BASE_URL}/${id}`,
            data: {
                email,
                firstName,
                lastName
            }
        })
    },
    deleteUser: (id) => {
        return axios({
            method: 'DELETE',
            url: `${BASE_URL}/${id}`
        })
    }
}

export default User;
