import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setLogin, setEmail, authenticate } from './auth/authSlice';
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const { name, login, email } = useSelector(state => state.auth);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim() || !login.trim() || !email.trim()) {
            setError('все поля обязательны к заполнению!');
            return;
        }

        console.log('Sending data:', { name, login, email });
        dispatch(authenticate());
        setError('');
        dispatch(setName(''));
        dispatch(setLogin(''));
        dispatch(setEmail(''));

        window.location.reload();
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="form-group">
                        <h3 className="text-center mb-4">Форма входа</h3>
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control mb-3"
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                        />
                        <label htmlFor="login">Логин:</label>
                        <input
                            type="text"
                            id="login"
                            className="form-control mb-3"
                            value={login}
                            onChange={(e) => dispatch(setLogin(e.target.value))}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mb-3"
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                        />
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <button type="submit" className="btn btn-primary w-100 mt-3">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

