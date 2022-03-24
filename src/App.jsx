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
function App() {

  const initialState = [
    {
      id:'dsfasdf1',
      first_name:"Mr Juli",
      last_name:"Patison",
      email:"juli@gmail.com",
      phone:"+88-222-333-444",
      dob:"1990-05-25",
      picture:'https://randomuser.me/api/portraits/women/6.jpg',
      gender:"Female"
    },
    {
      id:'ds2sdfsd',
      first_name:"Mr Robert",
      last_name:"Miller",
      email:"robert@gmail.com",
      phone:"+88-555-333-1111",
      dob:"1985-02-01",
      picture:'https://randomuser.me/api/portraits/men/5.jpg',
      gender:"Male"
    },
    {
      id:"3dasf",
      first_name:"Mr Hue",
      last_name:"Jacman",
      email:"hue@gmail.com",
      phone:"+88-777-999-1111",
      dob:"1985-10-15",
      picture:'https://randomuser.me/api/portraits/men/6.jpg',
      gender:"Male"
    }
  ]

    const [contacts,setContacts] = useState(initialState);
    // console.log(contacts);

    const findContact = (id) => {
      let contact = contacts.find(item => {
        return item.id === id
      })
      // console.log(contact);
      return contact;
    }

    // const editContact = (id) => {
    //   findContact(id);
    // }

    const contactStore = (contactItem) => {
      console.log(contactItem);
      const newContact = {
          ...contactItem,
          id:uuidv4()
      }
      console.log(newContact);
      setContacts(prevState => {
        return[newContact,...prevState]
      })
      // console.log(newContact);
    }

    const contactUpdate = (contactItem) => {
  
      const newContact = contacts.map((contact) => {
        return contact.id === contactItem.id ? contact = contactItem : contact;
      }
      );
   
      setContacts(prevState => {
        return[...newContact]
      })
  
    }

  return (
    <BrowserRouter>
       <Header/>
        <div className="container mt-5">
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
          
            <Route exact path="/contact" element={<Contacts contacts={contacts} />} />
            <Route exact path="/contact/add" element={<AddContact contactStore={contactStore} />} />
            <Route exact path="/contact/:id/edit" element={<EditContact findContact={findContact} contactUpdate={contactUpdate} />} />
            <Route path="/contact/details/:id" element={<ContactDetail findContact={findContact} />} />
            <Route exact path="/about" element={<AboutPage  />} />
            
            
            <Route  path="*" element={<NotFound />} />

          </Routes>
       </div>

       <ToastContainer/>
    </BrowserRouter>
  
  )
}

export default App
