import React, { useState, useEffect } from 'react';
import User from './User';
const Userlist = () => {
    const [users, setUser] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUser(json));
    }, []);
    const handleAddUser = () => {
        setUser([...users, newUser]);
        setNewUser({ name: '', email: '' }); 
    };
    const handleDeleteUser = (id) => {
        setUser(users.filter((user) => user.id !== id));
    };
    return (
        <div>
            <h4>Userlist</h4>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}style={{ fontSize: '16px' }}>
                            <User user={user} onDelete={() => handleDeleteUser(user.id)} />
                        </li>
                    );})}
            </ul>
            <form>
                <h6>Enter your Name</h6>
                <input  type="text" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <br />
                <h6>Enter Email</h6>
                <input type="text" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <br />
                <button type="button" onClick={handleAddUser}>Add user</button>
            </form>
        </div>
    );
};
export default Userlist;
