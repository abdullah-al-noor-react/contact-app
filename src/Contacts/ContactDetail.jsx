import { useContext, useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import {Card,Button, Row, Col, Image,ListGroup} from 'react-bootstrap'
import PageLoader from "../Components/PageLoader";
import { ContactContext } from "../Contexts/ContactContext";

function ContactDetail() {
  let {id : contactId} = useParams();
  const [loading,setLoading] = useState(true)
  const [contactDetails,setcContactDetails] = useState(false)

  
  const {findContact,getContact} = useContext(ContactContext)


  // console.log(getContact);
  useEffect(() => {
      findContact(contactId)
  },[contactId])

  useEffect(() => {
      if(getContact){
        setcContactDetails(getContact)
        setLoading(false)
      }
  
  },[getContact])


  
  return (

    <>
      {loading ?  <PageLoader/> :  <Card>
        <Card.Header>Contact Details
    {}

        </Card.Header>
        <Row>
          <Col sm={12} md={6}>
            <Image className="fluid" src={contactDetails.picture} />
                      </Col>
          <Col sm={12} md={6}>
          <ListGroup as="ul">
            <ListGroup.Item as="li" >
            {contactDetails.first_name} {contactDetails.last_name}
            </ListGroup.Item>
            <ListGroup.Item as="li">{contactDetails.dob}</ListGroup.Item>
            <ListGroup.Item as="li">{contactDetails.phone}</ListGroup.Item>
            <ListGroup.Item as="li">{contactDetails.email}</ListGroup.Item>
            <ListGroup.Item as="li">{contactDetails.gender}</ListGroup.Item>
        
          </ListGroup>
          </Col>
        </Row>
        {/* <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
      </Card> }
    </>
       
  )
}

export default ContactDetail