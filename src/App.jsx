import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { v4 as uuidv4 } from 'uuid';


// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Layouts/Header';
import AddContact from './Contacts/AddContact';
import NotFound from './Pages/NotFound';
import HomePage from './Pages/HomePage';
import Contacts from './Contacts/Contacts';
import ContactDetail from './Contacts/ContactDetail';
function App() {

  const initialState = [
    {
      id:1,
      first_name:"Mr Juli",
      last_name:"Patison",
      email:"juli@gmail.com",
      phone:"+88-222-333-444",
      dob:"1990-05-25",
      picture:'https://randomuser.me/api/portraits/women/6.jpg',
      gender:"Female"
    },
    {
      id:2,
      first_name:"Mr Robert",
      last_name:"Miller",
      email:"robert@gmail.com",
      phone:"+88-555-333-1111",
      dob:"1985-02-01",
      picture:'https://randomuser.me/api/portraits/men/5.jpg',
      gender:"Male"
    },
    {
      id:3,
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
      
        return item.id == id
      })
      // console.log(contact);
      return contact;
     
    }

  return (
    <BrowserRouter>
    <Header/>
        <div className="container mt-5">
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
          
            <Route exact path="/contact" element={<Contacts contacts={contacts} />} />
            <Route exact path="/contact/add" element={<AddContact/>} />
            <Route path="/contact/details/:id" element={<ContactDetail findContact={findContact} />} />

            <Route  path="*" element={<NotFound />} />

          </Routes>
       </div>
    </BrowserRouter>
  
  )
}

export default App
