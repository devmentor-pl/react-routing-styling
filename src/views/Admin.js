// ./src/views/Admin.js
import React from 'react';
import { logout } from './../auth';
import { useHistory } from 'react-router-dom';

const Admin = () => {
    const history = useHistory();

    const handleClick = () => {
        logout(() => history.push('/login'));
    }

    return (
         <>
            <h1>Admin</h1>
            <p>Teraz możesz zarządzać stroną!</p>
            <button 
                onClick={ handleClick }
            >logout</button>
         </>
    );
}

export default Admin;