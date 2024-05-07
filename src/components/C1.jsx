import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/firebase';

function C1({book}) {
  const firebase = useFirebase();
const [url,seturl] = useState('')
  useEffect(()=>{
firebase.GetUrl(book.data(). imageURL).then((value)=>{
  seturl(value)
})
  },[])
  return (
    <div className='container  '>
       <Card style={{ width: '18rem' }} className='mt-5 '>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{book.data().name}</Card.Title>
        <Card.Text>
        This book has a title {book.data().name} and this book is sold by{" "}
          {book.data().displayName} and this book costs Rs.{book.data().price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default C1