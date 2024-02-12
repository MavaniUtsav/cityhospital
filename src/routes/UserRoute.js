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
import StepForm from '../containers/Form/Form';
import Form2 from '../containers/Form/Form2';
import FormP from '../containers/Form/FormP';
import Counter from '../containers/Counter/Counter';
import Cart from '../containers/Cart/Cart';
import UseRef from '../containers/Task/useRef';
import UseMemo from '../containers/Task/useMemo';
import UseCallback from '../containers/Task/useCallback';
import Chat from '../containers/Chat/Chat';

function UserRoute(props) {
    const [counter, setCounter] = useState(0);
    const [favItem, setFavItem] = useState([]);

    
    return (
        
        <>
            <Header counter={counter} favItem={favItem}/>
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
                <Route exact path='/medicine' element={<Medicine increment={setCounter} favItem={favItem} setFavItem={setFavItem}/>} />
                <Route exact path='/medicine/:id' element={<MedicineData />} />
                <Route exact path='/auth' element={<Auth />} />
                <Route exact element={<PrivateRoute />}>
                    <Route exact path='/appointment' element={<Appointment />} />
                </Route>
                <Route exact path='/reviews/:id' element={<ReviewDetails />} />
                <Route exact path="/formclass" element={<Form2 />} />
                <Route exact path="/formpractice" element={<FormP />} />
                <Route exact path="/form" element={<StepForm />} />
                <Route exact path='/redux' element={<Counter />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/chat' element={<Chat />} />
                <Route exact path='/useref' element={<UseRef />} />
                <Route exact path='/usememo' element={<UseMemo />} />
                <Route exact path='/usecallback' element={<UseCallback />} />
                <Route exact path='*' element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoute;