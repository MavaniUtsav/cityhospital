import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './containers/Home/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
