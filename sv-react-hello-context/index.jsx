function SubSubSection({message}) {
  return (
    <div className="box">
      <h3>I'm the SubSubSection</h3>
      <p>{message}</p>
    </div>
  );
}

function SubSection({message}) {
  return (
    <div className="box">
      <h2>I'm the SubSection</h2>
      <SubSubSection message={message}/>
    </div>
  );
}

function Section() {
  const [message, setMessage] = React.useState('');
  return (
    <div className="box">
      <h1>I'm the Section</h1>
      <p>
        Message : <input type="text" value={message} onChange={event => setMessage(event.target.value)}/>
      </p>
      <SubSection message={message}/>
    </div>
  );
}

const AppContext = React.createContext({});

function UseContextSubSubSection() {
  const appContext = React.useContext(AppContext);
  return (
    <div className="box">
      <h3>I'm the UseContextSubSubSection</h3>
      <p>{appContext.message}</p>
    </div>
  );
}

function UseContextSubSection() {
  return (
    <div className="box">
      <h2>I'm the UseContextSubSection</h2>
      <UseContextSubSubSection/>
    </div>
  );
}

function UseContextSection() {
  const [message, setMessage] = React.useState('');
  return (
    <AppContext.Provider value={{message: message}}>
      <div className="box">
        <h1>I'm the UseContextSection</h1>
        <p>
          Message : <input type="text" value={message} onChange={event => setMessage(event.target.value)}/>
        </p>
        <UseContextSubSection/>
      </div>
    </AppContext.Provider>
  );
}

const page = (
  <>
    <Section/>
    <UseContextSection/>
  </>
);

ReactDOM.render(
  page,
  document.getElementById('root')
);
