import './App.css';
import { useState } from 'react';
import Button from './components/Button'

function App() {
   const [books, setBooks] = useState([])

     const fetchBooks = () =>{
            fetch(`https://openlibrary.org/search.json?q=lord+of+the+rings&limit=10`)
            .then(response =>{
              if (!response.ok){
                throw Error('Failed to fetch')
              }
              return response.json()
            }).then(data => {
                const itiratedBooks = data.docs.map((bookData) =>{
                  return {
                    cover_id: bookData.cover_i,
                    title: bookData.title,
                    author: bookData.author_name,
                    publish_year: bookData.first_publish_year
                  }
                  
                })
                setBooks(itiratedBooks)
            }).catch(err=>{
              console.log(err.message)
            })
            console.log(books)
     }
    
  return (
    <>
      <Button onClick={fetchBooks}/>
    </>
  );
}

export default App;
