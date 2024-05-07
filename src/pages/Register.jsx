import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/firebase';
function Register() {
    const firebase = useFirebase();
    console.log(firebase)
    const  [email,setemail] = useState("");
    const  [password,setpassword] = useState("")
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signin up a user...");
        const result = await firebase.signupUserWithEmailAndPassword(
          email,
          password
        );
        console.log("Successfull", result);
      };
  return (
    <div className='container mt-5'>
         <Form onSubmit={ handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Password" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default Register