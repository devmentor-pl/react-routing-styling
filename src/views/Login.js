// ./src/views/Login.js
import React from 'react';
import { login } from './../auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const handleClick = () => {
        login({}, () => history.push('/admin'));
    }

    return (
         <>
            <h1>Login</h1>
            <p>Zaloguj się do panelu Admin-a</p>
            <button 
                onClick={ handleClick }
            >login</button>
         </>
    );
}

export default Login;