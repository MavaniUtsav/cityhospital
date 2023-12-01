import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    const auths = useSelector(state => state.auth)
    console.log(auths.user);

    const auth = false
    return (
        auths.user !== null ? <Outlet /> : <Navigate to='/auth' />
    );
}

export default PrivateRoute;