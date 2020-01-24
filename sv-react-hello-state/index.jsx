function HookCounter({initialCount}) {
  const [count, setCount] = React.useState(initialCount);
  return (
    <>
      <h3>Hook Count: {count}</h3>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}


class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    };
  }
  render() {
    return (
      <>
        <h3>Class Count: {this.state.count}</h3>
        <button onClick={() => this.setState({count: this.props.initialCount})}>Reset</button>
        <button onClick={() => this.setState({count: this.state.count-1})}>-</button>
        <button onClick={() => this.setState({count: this.state.count+1})}>+</button>
      </>
    );
  }
}


const page = (
  <>
    <HookCounter initialCount={7}/>
    <ClassCounter initialCount={3}/>  
  </>
);


ReactDOM.render(
  page,
  document.getElementById('root')
);
