import placeholder from '../assets/book_cover_placeholder.png'
const Book = (props) => {
    //Handeling cases when there is no cover_id. 
    let bookcover
    if (props.cover_id == null){
         bookcover = placeholder
    }else{
         bookcover = `https://covers.openlibrary.org/b/id/${props.cover_id}-M.jpg`
    }
    return(
        <div className="book" key={props.index}>
            <img className="book-cover" src={bookcover}></img>
            <p><span>Title:</span> {props.title}</p>
            <p><span>Author: </span>{props.author ? props.author[0] : <span>N/A</span>}</p>
            <p><span>Year:</span> {props.publish_year}</p>
        </div>
    )
}

export default Book