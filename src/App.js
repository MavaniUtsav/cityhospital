import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './containers/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Department from './containers/Department/Department';
import Doctor from './containers/Doctar/Doctor';
import Auth from './containers/Auth/Auth';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Appointment from './containers/Appointment/Appointment';
import CardBox from './components/UI/Card/CardBox';
import ProductPage2 from './containers/Test-3/Test';
import Error from './containers/Error/Error';
import OurTeam from './containers/NestedRouting Comp/OurTeam';
import ToDepartment from './containers/NestedRouting Comp/ToDepartment';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/Department' element={<Department />} />
        <Route exact path='/Doctor' element={<Doctor />} />
        <Route exact path='/About/' element={<About />}>
          <Route path='ourteam' element={<OurTeam />} />
          <Route path='ourtreatments' element={<ToDepartment />} />
        </Route>
        <Route exact path='/Contact' element={<Contact />}/>
        <Route exact path='/auth' element={<Auth />} />
        <Route exact path='/appointment' element={<Appointment />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <CardBox />
      <Footer />
      {/* <ProductPage2 /> */}
    </>
  );
}

export default App;
