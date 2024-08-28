import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../../configs/config'

const apiEndPoint = config.apiEndPoint;

const AddUser = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayname, setDisplayname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");

    const createUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(apiEndPoint + '/users', {
                username,
                password,
                displayname,
                email,
                role
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-half'>
                <form onSubmit={createUser}>
                    <div className='field'>
                        <label className='label'>Username</label>
                        <div className='control'>
                            <input type="text" className='input' required value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Username' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Password</label>
                        <div className='control'>
                            <input type="text" className='input' required value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Displayname</label>
                        <div className='control'>
                            <input type="text" className='input' required value={displayname} onChange={(e)=> setDisplayname(e.target.value)} placeholder='Displayname' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className='control'>
                            <input type="email" className='input' required value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Role</label>
                        <div className='control'>
                            <div className='select is-fullwidth'>
                                <select value={role} onChange={(e)=> setRole(e.target.value)}>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <button type="submit" className='button is-success'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser