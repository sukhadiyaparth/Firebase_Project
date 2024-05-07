import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase';
import C1 from "../components/C1"
function Home() {
    const firebase = useFirebase();
const [allbooks , setbooks] = useState([]);

useEffect(()=>{
    firebase.ListAllBooks().then((books)=>  setbooks(books.docs))
},[]);

  return (
    <div>
        {allbooks.map((book)=>(


                <C1 key={book.id} book={book}/>

))}
    </div>
  )
}

export default Home