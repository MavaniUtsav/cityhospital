import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import Error from './containers/Error/Error';
import PrivateRoute from './routes/PrivateRoute';
import { Provider, useSelector } from 'react-redux';
import { configureStore } from './redux/store';


function App() {
  let store = configureStore()

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={<UserRoute />} />
          <Route element={<PrivateRoute />}>
            <Route path='/admin/*' element={<AdminRoute />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
