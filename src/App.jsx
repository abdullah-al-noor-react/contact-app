import {  useContext, useState } from 'react'

import { ToastContainer } from 'react-toastify';

import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';




// import { render } from "react-dom";

import Header from './Layouts/Header';
import AddContact from './Contacts/AddContact';
import NotFound from './Pages/NotFound';
import HomePage from './Pages/HomePage';
import Contacts from './Contacts/Contacts';
import EditContact from './Contacts/EditContact';

import ContactDetail from './Contacts/ContactDetail';
import AboutPage from './Pages/AboutPage';
import { ContactProvider } from './Contexts/ContactContext';
import RegisterUser from './Authentication/RegisterUser';
import LoginUser from './Authentication/LoginUser';
import { AuthContext, AuthProvider } from './Contexts/AuthContext';

const AuthRequired = ({children}) => {
    const {user} = useContext(AuthContext)
  const location = useLocation()

    if(user){
      return children;
    }else{
      return <Navigate to="/login" state={{ from: location.pathname }} />
    }
}
const PublicRoute = ({children}) => {
  const {user} = useContext(AuthContext)
  const location = useLocation()
  if(!user){
    return children;
  }else{
    return <Navigate to={location?.state?.from || '/contact'}   />
  }
}


function App() {

  
  return (
    <AuthProvider>
    <ContactProvider>
   
       <Header/>
        <div className="container mt-5">
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path="/about" element={<AboutPage  />} />

            <Route exact path="/contact" element={
             <AuthRequired>
            <Contacts  />
            </AuthRequired>} />
            <Route exact path="/contact/add" element={
              <AuthRequired>
                <AddContact />
              </AuthRequired> }/>
            <Route exact path="/contact/:id/edit" element={
            <AuthRequired>
            <EditContact  />
            </AuthRequired>} />
            <Route path="/contact/details/:id" element={
            <AuthRequired>
            <ContactDetail  />
            </AuthRequired>} />

           
            <Route exact path="/register" element={
            <PublicRoute>
            <RegisterUser  />
            </PublicRoute>} />
            <Route exact path="/login" element={
                <PublicRoute>
            <LoginUser  />
            </PublicRoute>} />
            

          </Routes>
       </div>

       <ToastContainer/>

    </ContactProvider>
    </AuthProvider>
  
  )
}

export default App
