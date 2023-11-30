import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import Error from './containers/Error/Error';
import PrivateRoute from './routes/PrivateRoute';
import { Provider, useSelector } from 'react-redux';
import { configureStore, persistor, store } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from 'notistack';
import Alert from './components/Alert/alert';

function App() {
  // let {store,persistor}  = configureStore()

  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Alert />
            <Routes>
              <Route path='/*' element={<UserRoute />} />
              <Route element={<PrivateRoute />}>
                <Route path='/admin/*' element={<AdminRoute />} />
              </Route>
            </Routes>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
