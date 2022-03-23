import { Link } from 'react-router-dom';

import { Col ,Card,ListGroupItem,ListGroup} from 'react-bootstrap'

const Contact = ({contactItem: {  id,
    first_name,
    last_name,
    email,
    phone,
    dob,
    picture,
    gender}}) => {
   
    

        // console.log(id);
  return (
   
        <>
    
    <Col sm={12} md={4} lg={3}>
        <Card >
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{first_name } {last_name}</Card.Title>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{phone}</ListGroupItem>
                <ListGroupItem>{email}</ListGroupItem>
            
            </ListGroup>
            <Card.Body>
                <Card.Link as={Link} to={`/contact/details/${id}`}>View Details</Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
            </Card>

      </Col>
        </>
   
  )
}

export default Contact