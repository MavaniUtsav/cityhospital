import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './containers/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Department from './containers/Department/Department';
import Doctor from './containers/Doctar/Doctor';
import Auth from './containers/Auth/Auth';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Department' element={<Department />} />
        <Route path='/Doctor' element={<Doctor />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
