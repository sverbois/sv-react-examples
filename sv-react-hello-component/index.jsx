function HelloFunction(props) {
  return <h1>Hello {props.name}</h1>;
}


const HelloArrow = ({name}) => (
  <h1>Hello {name}</h1>
);


class HelloComponent extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}


const page = (
  <>
    <HelloFunction name="Sébastien"/>
    <HelloArrow name="Alain"/>
    <HelloComponent name="Sibylle"/>
  </>
)

// La fonction *render* accept aussi une liste d'élements.
const elements = [
  <HelloFunction name="Sébastien"/>,
  <HelloArrow name="Alain"/>,
  <HelloComponent name="Sibylle"/>
]

ReactDOM.render(
  elements,
  document.getElementById('root')
);
