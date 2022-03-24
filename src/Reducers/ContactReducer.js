
import { v4 as uuidv4 } from 'uuid';

import { GET_CONTACT,GET_CONTACTS,STORE_CONTACT,UPDATE_CONTACT } 
from '../Actions/ContactAction'


export const ContactReducer = (state,action) => {
    const {type,payload} = action
    switch (type) {
        case GET_CONTACT:
                let singleContact = state.find(item => {
                return item.id == payload
              })
            //   console.log(payload);
              console.log('in',singleContact);
              return singleContact;
        case STORE_CONTACT:
            let newContact = {
                ...payload,
                id:uuidv4()
            }
            return[newContact,...state];
        case UPDATE_CONTACT:
            let editConatact = state.map((contact) => {
                return contact.id === contactItem.id ? contact = contactItem : contact;
              }
              );
           
              return[...editConatact]  
        default:
            return state
    }
}