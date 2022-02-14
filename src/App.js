import './App.css';
import { useState } from 'react';
import Button from './components/Button'
import Input from './components/Input'
import BookList from './components/BookList';

function App() {
   const [books, setBooks] = useState([])
   const [inputValue, setInputValue] = useState([])

  const fetchBooks = () =>{
    const query = inputValue.replace(/ /g, '+')
    fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`)
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
      <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <Button onClick={fetchBooks}/>
      <BookList books ={books}/>
    </>
  );
}

export default App;
