function Book({book}) {
  return (
    <section>
      <h3 className="bookTitle">{book.title}</h3>
      <div className="bookMetadata">
        <strong>Auteurs</strong> : {book.authors.map(author => <span key={book['@id']}>{author.title}, </span>)}
        <br />
        <strong>ISBN</strong> : {book.isbn13}
        <br />
        <strong>Prix</strong> : {book.price}
      </div>
    </section>
  )
}


function BookList({books}) {
  //console.table(books)
  return (
    <div>
      {books.map(book =>
        <Book key={book['@id']} book={book}/>
      )}
    </div>
  )
}


function BookStore({plone_url, content_type}){
  const [filter, setFilter] = React.useState('');
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    //console.log('use effect');
    let filter_query = filter ? "&SearchableText=" + filter + '*' : '';
    let search_url = `${plone_url}/@search?portal_type=${content_type}&sort_on=sortable_title&fullobjects${filter_query}`;
    //console.log(search_url);
    fetch(search_url, {
      headers: {'Accept': 'application/json'},
    })
      .then(response => response.json())
      .then(data => {setBooks(data.items);});
  },[filter]);

  return (
    <section>
      <header>
        <h1>Quelques livres issus d'un backend Plone</h1>
      </header>
      <form>
        <input type="text" value={filter} onChange={event => setFilter(event.target.value)}/>
      </form>
      <BookList books={books}/>
    </section>
  );
}


ReactDOM.render(
  <BookStore plone_url="http://plone52.test.unamur.be/Plone" content_type="book" />,
  document.getElementById('root'));
