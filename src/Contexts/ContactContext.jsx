import  { createContext,useReducer } from 'react'
import { ContactReducer } from '../Reducers/ContactReducer'

import { GET_CONTACT,GET_CONTACTS,STORE_CONTACT,UPDATE_CONTACT } 
from '../Actions/ContactAction'

const initialState ={
  contact:{},
  contacts: [
    {
      id:"444fd",
      first_name:"Mr Juli",
      last_name:"Patison",
      email:"juli@gmail.com",
      phone:"+88-222-333-444",
      dob:"1990-05-25",
      picture:'https://randomuser.me/api/portraits/women/6.jpg',
      gender:"Female"
    },
    {
      id:'2dsfsf',
      first_name:"Mr Robert",
      last_name:"Miller",
      email:"robert@gmail.com",
      phone:"+88-555-333-1111",
      dob:"1985-02-01",
      picture:'https://randomuser.me/api/portraits/men/5.jpg',
      gender:"Male"
    },
    {
      id:'3dsfsd',
      first_name:"Mr Hue",
      last_name:"Jacman",
      email:"hue@gmail.com",
      phone:"+88-777-999-1111",
      dob:"1985-10-15",
      picture:'https://randomuser.me/api/portraits/men/6.jpg',
      gender:"Male"
    }
  ]
}


export const ContactContext = createContext()

export const ContactProvider = ({children}) => {

    const [contacts,dispatch] = useReducer(ContactReducer,initialState)

    // const getContacts = () => {
    //   dispatch({type:GET_CONTACTS})
    // }

    const findContact = (id) => {
      dispatch({type:GET_CONTACT,payload:id})
      // console.log(contacts);
      
    }
    const getContact = ()=>{
      return contacts.contact
    }

    const contactStore = (contactItem) => {
      dispatch({type:STORE_CONTACT,payload:contactItem})
    }

    const contactUpdate = (contactItem) => {
      dispatch({type:UPDATE_CONTACT,payload:contactItem})
    }

    const value= {
      contacts,
      getContact,
      findContact,
      contactStore,
      contactUpdate
    }

    return (
        <ContactContext.Provider value={value}>
            {children}
        </ContactContext.Provider>
    )
}