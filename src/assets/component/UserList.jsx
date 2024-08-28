import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../../configs/config'

// const apiEndPoint = config.APIENDPOINT;

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get(config.apiEndPoint + '/users');
        setUser(response.data.data);
    }

    const deleteUser = async (username) => {
        try {
            // console.log(config.apiEndPoint + `/users/${username}`);
            await axios.delete(config.apiEndPoint + `/users/${username}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={'adduser'} className='button is-success'>AddUser</Link>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Id</th>
                            <th>Usename</th>
                            <th>Password</th>
                            <th>Displayname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.displayname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to={`edituser/${user.username}`} className='button is-small is-info'>Edit</Link>
                                    <button onClick={() => deleteUser(user.username)} className='button is-small is-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table></div>
        </div>
    </>
    )
}

export default UserList