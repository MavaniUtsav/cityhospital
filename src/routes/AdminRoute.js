import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../containers/Error/Error';
import Layouts from '../admin/containers/component/Layouts';
import DialogForm from '../admin/containers/component/DialogForm';
import Medicines from '../admin/containers/Medicines/Medicines';
import Doctors from '../admin/containers/Doctors/Doctors';

function AdminRoute(props) {
    return (
        <Layouts>
        <Routes>
            <Route path='/medicines' element={<Medicines />} />
            <Route path='/doctors' element={<Doctors />} />
            {/* <Route path='/medicine/:id' element={<DialogForm />} /> */}
            {/* <Route exact path='*' element={<Error />} /> */}
        </Routes>
        </Layouts>
    );
}

export default AdminRoute;