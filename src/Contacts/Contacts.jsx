import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import Contact from './Contact'

function Contacts({contacts}) {
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