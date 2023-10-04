import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicines from '../admin/containers/Medicines/Medicines';
import Error from '../containers/Error/Error';

function AdminRoute(props) {
    return (
        <Routes>
            <Route path='/medicines' element={<Medicines />} />
            {/* <Route exact path='*' element={<Error />} /> */}
        </Routes>
    );
}

export default AdminRoute;