let helloReact = React.createElement('h1', null, "Hello React !!!");

let helloProps = React.createElement('a', {
    href: 'http://www.unamur.be',
    target: '_blank',
    className: 'important',
    style: {'font-style': 'italic'}
  }, "Hello props !!!");

let helloJSX = <h1>Hello JSX</h1>;

let helloJSXwithProperties = (
  <p className="important" style={{'font-style': 'italic'}}>
    Hello props in JSX
  </p>
);

const page = (
  <section>
    {helloReact}
    {helloProps}
    {helloJSX}
    {helloJSXwithProperties}
  </section>
);

ReactDOM.render(
  page,
  document.getElementById('root')
);
