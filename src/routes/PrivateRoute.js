import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    const auth = useSelector(state => state.auth)
    console.log(auth.user);
    return (
        auth.user === null ? <Navigate to='/auth' /> : <Outlet />
    );
}

export default PrivateRoute;