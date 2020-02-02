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


function BookList({books, filteredBookIds}) {
  let filteredBooks = Object.values(books).filter(b => filteredBookIds.includes(b['@id']))
  return (
    <div>
      {filteredBooks.map(b =>
        <Book key={b['@id']} book={b}/>
      )}
    </div>
  )
}


function BookStore({plone_url, content_type}){
  const [books, setBooks] = React.useState({});
  const [filter, setFilter] = React.useState('');
  const [filteredBookIds, setFilteredBookIds] = React.useState([]);

  // Load all books on first component rendering
  React.useEffect(() => {
    let search_url = `${plone_url}/@search?portal_type=book&sort_on=sortable_title&fullobjects`;
    fetch(search_url, {
      headers: {'Accept': 'application/json'},
    })
      .then(response => response.json())
      .then(data => {
        let books = {};
        data.items.forEach(item => {
          books[item['@id']] = item;
        });
        setBooks(books);
      });
  },[]);

  // Use Plone @search endpoint to filter
  React.useEffect(() => {
    let filter_query = filter ? "&SearchableText=" + filter + '*' : '';
    let search_url = `${plone_url}/@search?portal_type=book&sort_on=sortable_title${filter_query}`;
    fetch(search_url, {
      headers: {'Accept': 'application/json'},
    })
      .then(response => response.json())
      .then(data => {
        let ids = data.items.map(t => t['@id']);
        setFilteredBookIds(ids);
      });
  },[filter]);

  return (
    <section>
      <header>
        <h1>Quelques livres issus d'un backend Plone</h1>
      </header>
      <form>
        <input type="text" value={filter} onChange={event => setFilter(event.target.value)}/>
      </form>
      <BookList books={books} filteredBookIds={filteredBookIds}/>
    </section>
  );
}


ReactDOM.render(
  <BookStore plone_url="http://plone52.test.unamur.be/Plone"/>,
  document.getElementById('root'));
