import { useContext, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { AuthContext } from '../Contexts/AuthContext'
import {useNavigate,useParams} from 'react-router-dom'


function RegisterUser() {
    let navigate = useNavigate();
    const {saveAuthInfo} = useContext(AuthContext)

    const userObject = {
        username:'',
        email:'',
        password:''
    }

    const [formData,setFormData] = useState(userObject)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
       
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
            let res = await axios
                    .post('http://localhost:1337/api/auth/local/register', formData) 
                    // console.log(res.data);
                    saveAuthInfo(res.data)
                    navigate('/contact')
        } catch (error) {
            // console.log(error);
            console.log(error.response);
        }


        // console.log(user);
    }

    const {username,email,password} = formData




  return (
    <>
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3"   controlId="userName">
            <Form.Label>Email </Form.Label>
            <Form.Control type="text" name="username"
            value={username} onChange={handleChange}
             placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" name="email"
             value={email} onChange={handleChange}
            placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password'
                value={password} onChange={handleChange}
            placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </>
  )
}

export default RegisterUser