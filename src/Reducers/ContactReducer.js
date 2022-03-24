
import { v4 as uuidv4 } from 'uuid';

import { GET_CONTACT,GET_CONTACTS,STORE_CONTACT,UPDATE_CONTACT } 
from '../Actions/ContactAction'


export const ContactReducer = (state,action) => {
    const {type,payload} = action
    switch (type) {
        case GET_CONTACT:
                let singleContact = state.contacts.find(item => {
                return item.id == payload
              })
            //   console.log(payload);
              console.log('in',singleContact);
              return {
                  ...state,
                  contact:singleContact,
              };
        case STORE_CONTACT:
            let newContact = {
                ...payload,
                id:uuidv4()
            }
            return {
                ...state,
                contacts:[newContact,...state.contacts]
            };
        case UPDATE_CONTACT:
            let editConatact = state.contacts.map((contact) => {
                return contact.id === contactItem.id ? contact = contactItem : contact;
              }
              );
           
              return{
                  ...state,
                  contacts:[...editConatact]
              }  
        default:
            return state
    }
}