import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from '../component/auth/LoginForm';
import Registration from '../component/auth/RegistrationForm';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login"  element={<Login />}/>
            <Route path="/register" element={<Registration />}/>
        </Routes>
    );
};

export default AppRoutes;