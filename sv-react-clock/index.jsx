function HookClock() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    //console.log('effect');
    const timerID = setInterval(
      () => { setDate(new Date()) },
      1000
    );
    return () => {
      //console.log('cleanup');
      clearInterval(timerID);
    }
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}


class ClassClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => { this.setState({ date: new Date() }) },
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


const page = (
  <>
    <HookClock />
    <ClassClock />
  </>
);


ReactDOM.render(
  page,
  document.getElementById('root')
);
