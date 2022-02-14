import Book from './Book'
const BookList = (props) => {
    return(
        <div className='book-list-wrapper'>
            <div className='book-list'>
            {props.books.map((book, index) =>(
                <>
                <Book
                    index ={index}
                    title={book.title}
                    publish_year={book.publish_year}
                    author = {book.author}
                    cover_id={book.cover_id}
                    />
                </>
            ))}
            </div>
        </div>
        
    )
  }

  export default BookList