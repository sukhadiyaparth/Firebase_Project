import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/firebase';

function List() {
    const firebase = useFirebase();
console.log(firebase)
    const  [name,setname] = useState("");
    const  [ISBN,setISBN] = useState("")
    const  [price,setprice] = useState("")
    const  [pic,setcoverpic] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
       const result = await firebase.handleCreateNewListing(name,ISBN, price,pic);
}

  return (


    <div>
           <Form className='mt-5 container' onSubmit={ handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book name</Form.Label>
        <Form.Control onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder="Enter Book name" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN</Form.Label>
        <Form.Control  onChange={(e)=>setISBN(e.target.value)} value={ISBN} type="text" placeholder="ISBN Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control  onChange={(e)=>setprice(e.target.value)} value={price} type="text" placeholder="ISBN Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Cover Pic</Form.Label>
        <Form.Control  onChange={(e)=>setcoverpic(e.target.files[0])}  type="file"  />
      </Form.Group>
      
    
      <Button variant="primary" type="submit">
cerate      </Button>
    </Form>
    </div>
  )
}

export default List