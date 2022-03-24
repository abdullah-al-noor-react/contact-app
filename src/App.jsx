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
function App() {

  // const initialState = [
  //   {
  //     id:'dsfasdf1',
  //     first_name:"Mrs Juli",
  //     last_name:"Patison",
  //     email:"juli@gmail.com",
  //     phone:"+88-222-333-444",
  //     dob:"1990-05-25",
  //     picture:'https://randomuser.me/api/portraits/women/6.jpg',
  //     gender:"female"
  //   },
  //   {
  //     id:'ds2sdfsd',
  //     first_name:"Mr Robert",
  //     last_name:"Miller",
  //     email:"robert@gmail.com",
  //     phone:"+88-555-333-1111",
  //     dob:"1985-02-01",
  //     picture:'https://randomuser.me/api/portraits/men/5.jpg',
  //     gender:"male"
  //   },
  //   {
  //     id:"3dasf",
  //     first_name:"Mr Hue",
  //     last_name:"Jacman",
  //     email:"hue@gmail.com",
  //     phone:"+88-777-999-1111",
  //     dob:"1985-10-15",
  //     picture:'https://randomuser.me/api/portraits/men/6.jpg',
  //     gender:"male"
  //   }
  // ]

    // const [contacts,setContacts] = useState(initialState);
    // console.log(contacts);

    // const findContact = (id) => {
    //   let contact = contacts.find(item => {
    //     return item.id === id
    //   })
    //   // console.log(contact);
    //   return contact;
    // }

    // const editContact = (id) => {
    //   findContact(id);
    // }

    // const contactStore = (contactItem) => {
    //   console.log(contactItem);
    //   const newContact = {
    //       ...contactItem,
    //       id:uuidv4()
    //   }
    //   console.log(newContact);
    //   setContacts(prevState => {
    //     return[newContact,...prevState]
    //   })
    //   // console.log(newContact);
    // }

    // const contactUpdate = (contactItem) => {
  
    //   const newContact = contacts.map((contact) => {
    //     return contact.id === contactItem.id ? contact = contactItem : contact;
    //   }
    //   );
   
    //   setContacts(prevState => {
    //     return[...newContact]
    //   })
  
    // }

  return (
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
            
            
            <Route  path="*" element={<NotFound />} />

          </Routes>
       </div>

       <ToastContainer/>
    </BrowserRouter>
    </ContactProvider>
  
  )
}

export default App
