const Input = (props) => {
    return(
        <input type='text' placeholder='Search' value={props.value} onChange={props.onChange}></input> 
    )   
}

export default Input