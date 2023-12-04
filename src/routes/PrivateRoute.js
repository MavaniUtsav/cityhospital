import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    const auth = useSelector(state => state.auth)
    console.log(auth);

    return (
        auth.user ? <Outlet /> : <Navigate to='/auth' replace/>
    );
}

export default PrivateRoute;