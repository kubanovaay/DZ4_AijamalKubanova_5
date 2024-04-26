import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LoginForm from './features/LoginForm';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <LoginForm />
            </div>
        </Provider>
    );
}

export default App;


