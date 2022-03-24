import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import {Form,Button} from 'react-bootstrap'

function AddContact({contactStore}) {

    let navigate = useNavigate();



    const contactObject = {
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        dob:'',
        picture:"",
        gender:"male"
    }
    const [contact,setContact] = useState(contactObject)

const handleChange = (e)=>{
    setContact(prevState => {
        return{
            ...prevState,
            [e.target.name]:e.target.value
        }
    })
}

const handleSubmit = (e)=> {
    e.preventDefault()
    // console.log(contact);
    contactStore(contact)
    setContact(contactObject)
    toast.success("Contact is Added successfully...");
    navigate('/contact')


    
}
  

const  {first_name,last_name,email,phone,dob,picture,gender} = contact

  return (
    <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" >
                <Form.Label>First Name </Form.Label>
                <Form.Control type="text" placeholder="Enter First Name"
                name="first_name" value={first_name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Last Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name"
                name="last_name" value={last_name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter Email"
                name="email" value={email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Phone </Form.Label>
                <Form.Control type="text" placeholder="Enter Phone"
                name="phone" value={phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>DOB </Form.Label>
                <Form.Control type="date" placeholder="Enter DOB"
                name="dob" value={dob} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Picture </Form.Label>
                <Form.Control type="tex" placeholder="Enter Picture"
                name="picture" value={picture} onChange={handleChange} />
            </Form.Group>
                <Form.Select className="mb-3" onChange={handleChange}  name="gender">
                    <option>  Select Gender</option>
                    <option value="male"  >Male</option>
                    <option value="female" >Female</option>
                </Form.Select>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
  )
}

export default AddContact