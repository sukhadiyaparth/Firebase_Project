import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';
function Register() {
    const firebase = useFirebase();
    console.log(firebase)
    const  [email,setemail] = useState("");
    const  [password,setpassword] = useState("")
    const nevigate = useNavigate()
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await firebase.signinUserWithEmailAndPassword (
          email,
          password
        );
        console.log("Successfull-Login", result);
      };

      useEffect(()=>{
        if(firebase.IsLoggedIn){
          nevigate("/")
        }
      })
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
        Login
      </Button>
    </Form>
    <h1 className='mt-5 mb-5'>OR</h1>
    <Button variant='danger' onClick={firebase.signinWithGoogle} >Sign in With Goggle</Button>
    </div>
  )
}

export default Register