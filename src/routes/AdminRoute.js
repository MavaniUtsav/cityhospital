import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicines from '../admin/containers/Medicines/Medicines';
import Error from '../containers/Error/Error';
import Layouts from '../admin/containers/component/Layouts';

function AdminRoute(props) {
    return (
        <Layouts>
        <Routes>
            <Route path='/medicines' element={<Medicines />} />
            {/* <Route exact path='*' element={<Error />} /> */}
        </Routes>
        </Layouts>
    );
}

export default AdminRoute;