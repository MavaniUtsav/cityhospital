import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Department from '../containers/Department/Department';
import Doctor from '../containers/Doctar/Doctor';
import Auth from '../containers/Auth/Auth';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';
import Appointment from '../containers/Appointment/Appointment';
import Error from '../containers/Error/Error';
import OurTeam from '../containers/NestedRouting Comp/OurTeam';
import ToDepartment from '../containers/NestedRouting Comp/ToDepartment';
import Main from '../containers/Home/Home';
import PrivateRoute from './PrivateRoute';
import Dept from '../containers/Department/Dept';
import AllMedicines from '../containers/Home/AllMedicines';

function UserRoute(props) {
    return (
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/department' element={<Department />}/>
            <Route exact path='/dept/:id' element={<Dept />} />
            <Route exact path='/doctor' element={<Doctor />} />
            <Route exact path='/about/' element={<About />}>
                <Route path='ourteam' element={<OurTeam />} />
                <Route path='ourtreatments' element={<ToDepartment />} />
            </Route>
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/auth' element={<Auth />} />
            <Route element={<PrivateRoute />}>
                <Route exact path='/appointment' element={<Appointment />} />
            </Route>
            <Route exact path='/medicines/:id' element={<AllMedicines />} />
            {/* <Route exact path='*' element={<Error />} /> */}
        </Routes>
    );
}

export default UserRoute;