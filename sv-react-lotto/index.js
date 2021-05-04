function Lotto({ totalBalls, pulledBalls }) {

  const [balls, setBalls] = React.useState([]);

  const handlePull = (event) => {
    let newBall, newBalls;
    do {
      newBall = Math.ceil(Math.random() * totalBalls);
    } while (balls.indexOf(newBall) != -1);

    //newBalls = balls.concat(newBall);
    newBalls = [...balls, newBall];
    setBalls(newBalls);
  };

  const handleClear = (event) => {
    setBalls([]);
  }

  return (
    <section>
      <h1>Tirage Lotto</h1>
      <p>Tirer {pulledBalls} parmi {totalBalls} boules.</p>
      {balls.length < pulledBalls &&
        <button onClick={handlePull}>Tirer une boule</button>
      }
      <div>
        {balls.map((ball, index) =>
          <span className="ball" key={index}>{ball}</span>)}
      </div>
      {balls.length == pulledBalls &&
        <button onClick={handleClear}>Effacer le tirage</button>
      }
    </section>
  );

}

const page = (
  <div>
    <Lotto totalBalls="5" pulledBalls="4" />
    <Lotto totalBalls="7" pulledBalls="3" />
    <Lotto totalBalls="4" pulledBalls="4" />
  </div>
);

ReactDOM.render(
  page,
  document.getElementById('root')
);
