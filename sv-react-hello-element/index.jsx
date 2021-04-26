let helloReact = React.createElement('h1', null, "Hello React !!!");

let helloProps = React.createElement('a', {
  href: 'https://www.imio.be',
  target: '_blank',
  className: 'important',
  style: { 'font-style': 'italic' }
}, "Hello props !!!");

let helloList = React.createElement("ul", null,
  React.createElement("li", null, "First item"),
  React.createElement("li", null, "Second item"),
  React.createElement("li", null, "Third item")
);

let helloJSX = <h1>Hello JSX</h1>;

let helloJSXwithProperties = (
  <p className="important" style={{ 'font-style': 'italic' }}>
    Hello props in JSX
  </p>
);

let helloJSXList = (
  <ul>
    <li>First JSX item</li>
    <li>Second JSX item</li>
    <li>Third JSX item</li>
  </ul>
);

const page = (
  <section>
    {helloReact}
    {helloProps}
    {helloList}
    {helloJSX}
    {helloJSXwithProperties}
    {helloJSXList}
  </section>
);

ReactDOM.render(
  page,
  document.getElementById('root')
);
