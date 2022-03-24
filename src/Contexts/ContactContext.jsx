import  { createContext,useReducer } from 'react'
import { ContactReducer } from '../Reducers/ContactReducer'

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


export const ContactContext = createContext()

export const ContactProvider = ({children}) => {

    const [contacts,dispatch] = useReducer(ContactReducer,initialState)

    const value= {
      contacts,
    }

    return (
        <ContactContext.Provider value={value}>
            {children}
        </ContactContext.Provider>
    )
}