import React, { useContext } from 'react'
import { Row ,Col} from 'react-bootstrap'
import { ContactContext } from '../Contexts/ContactContext'
import Contact from './Contact'


function Contacts() {

  const {contacts} = useContext(ContactContext)
  return (
    <Row>
        {contacts.map((contactItem,index)=> {
        return(
          
            <Contact key={index} contactItem={contactItem} />
  
        )
     
            
        })}
     </Row>
  )
}

export default Contacts