import React, { useState } from 'react';
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
import ReviewDetails from '../containers/Home/ReviewDeatails';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Medicine from '../containers/UserMedicine/Medicine';
import MedicineData from '../containers/UserMedicine/MedicineData';

function UserRoute(props) {
    const [counter, setCounter] = useState(0);
    const [favCounter, setFavCounter] = useState(0);
    
    return (
        
        <>
            <Header counter={counter} favCount={favCounter}/>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path='/department' element={<Department />} />
                <Route exact path='/dept/:id' element={<Dept />} />
                <Route exact path='/doctor' element={<Doctor />} />
                <Route exact path='/about/' element={<About />}>
                    <Route path='ourteam' element={<OurTeam />} />
                    <Route path='ourtreatments' element={<ToDepartment />} />
                </Route>
                <Route exact path='/contact' element={<Contact />} />
                <Route path='/medicine' element={<Medicine increment={setCounter} favInc={setFavCounter}/>} />
                <Route path='/medicine/:id' element={<MedicineData />} />
                <Route exact path='/auth' element={<Auth />} />
                <Route element={<PrivateRoute />}>
                    <Route exact path='/appointment' element={<Appointment />} />
                </Route>
                <Route exact path='/reviews/:id' element={<ReviewDetails />} />
                <Route exact path='*' element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoute;