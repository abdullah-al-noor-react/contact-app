import { useState } from 'react'

import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter,
  Routes,
  Route,
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
import { AuthProvider } from './Contexts/AuthContext';
function App() {

  
  return (
    <AuthProvider>
    <ContactProvider>
    <BrowserRouter>
       <Header/>
        <div className="container mt-5">
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
          
            <Route exact path="/contact" element={<Contacts  />} />
            <Route exact path="/contact/add" element={<AddContact />} />
            <Route exact path="/contact/:id/edit" element={<EditContact  />} />
            <Route path="/contact/details/:id" element={<ContactDetail  />} />
            <Route exact path="/about" element={<AboutPage  />} />
            <Route exact path="/register" element={<RegisterUser  />} />
            <Route exact path="/login" element={<LoginUser  />} />
            
            
            <Route  path="*" element={<NotFound />} />

          </Routes>
       </div>

       <ToastContainer/>
    </BrowserRouter>
    </ContactProvider>
    </AuthProvider>
  
  )
}

export default App
