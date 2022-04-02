import { useContext, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { AuthContext } from '../Contexts/AuthContext'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

function LoginUser() {



  let navigate = useNavigate();
  const {saveAuthInfo} = useContext(AuthContext)

  const userObject = {
      
      identifier:'',
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
                  .post('http://localhost:1337/api/auth/local', formData) 
                  // console.log(res.data);
                  saveAuthInfo(res.data)
                  toast.success(" log in  successfully...");
                  navigate('/contact')
      } catch (error) {
          // console.log(error);
          console.log(error.response);
      }


      // console.log(user);
  }

  const {identifier,password} = formData









  return (
    <>
    <Form onSubmit={handleSubmit}>

   
    <Form.Group className="mb-3" controlId="formBasicidentifier">
        <Form.Label>identifier </Form.Label>
        <Form.Control type="identifier" name="identifier"
         value={identifier} onChange={handleChange}
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

export default LoginUser