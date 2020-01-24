function HookButton() {
  const [count, setCount] = React.useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked <em>HookButton</em> {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
    </div>
  );
}


class ClassButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <p>You clicked <em>ClassButton</em> {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}


const page = (
  <>
    <HookButton />
    <ClassButton />
  </>
);


ReactDOM.render(
  page,
  document.getElementById('root')
);
