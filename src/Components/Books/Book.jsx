const Book = ({title, author, price, url, type}) => {
    
  return (<figure style={{width: '40%'}}>
    <h4>{title} <i>by {author}</i></h4>
    <h6>&euro; {price || 'unknown'}</h6>
    <img src={url} alt={`${title}-book`} />
    <figcaption>{type}</figcaption>
  </figure>);
 }
 export default Book;