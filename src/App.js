import './App.css';
import { useState } from 'react';
import Button from './components/Button'
import Input from './components/Input'
import BookList from './components/BookList';
import Loading from './components/Loading'
import NotFound from './components/NotFound';
import InputErrorMessage from './components/InputErrorMessage'

function App() {
  const [books, setBooks] = useState([])
  const [inputValue, setInputValue] = useState([])
  const [inputError, setInputError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [notFound,setNotFound] = useState(false)
  const [error, setError] = useState('')

  const fetchBooks = () =>{
  //Re-setting all states to remove any previously fetched books or error messages
  setError('')
  setNotFound(false)
  setBooks([])
  //Blocking user from further actions if input value is empty
  if (inputValue == ''){
    setInputError(true)
  } else{
    setInputError(false)
    setLoading(true)
    //replacing 'spaces' with '+' as required by search api
      const query = inputValue.replace(/ /g, '+')
        fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`)
        .then(response =>{
          if (!response.ok){
            throw Error('Failed to fetch')
          }
          return response.json()
        }).then(data => {
          //Handling a case when no books are found
          if (data.docs.length == 0){
            setLoading(false)
            setNotFound(true)
          }else{
            //Taking data which only needed for this application.
            const itiratedBooks = data.docs.map((bookData) =>{
              return {
                cover_id: bookData.cover_i,
                title: bookData.title,
                author: bookData.author_name,
                publish_year: bookData.first_publish_year
              }
              
            })
            setLoading(false)
            setBooks(itiratedBooks)
          }
        //cathing fetching error and updating error variable    
        }).catch(err=>{
          setLoading(false)
          setError(err.message)
        })
    }
  }
    
  return (
    <div className='wrapper'>
      <div className='search-wrapper'>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <Button onClick={fetchBooks}/>
      </div>
      {inputError && <InputErrorMessage/>}
      {error ? error:
      notFound ? <NotFound/>:
      loading ? <Loading/> :
      <BookList books ={books}/>
      }
    </div>
  );
}

export default App;
