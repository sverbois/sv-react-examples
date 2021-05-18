const API_URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=999";

function Trees() {
    const [query, setQuery] = React.useState("");
    const [trees, setTrees] = React.useState([]);

    React.useEffect(() => {
        fetch(`${API_URL}&q=${query}`, {
            method: "GET",
            headers: { "Accept": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                setTrees(data.records);
            })
            .catch(error => console.log(error));
    }, [query]);

    return (
        <React.Fragment>
            <form className="mb-4">
                <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className="form-control" id="query" aria-describedby="queryHelp" placeholder="Filtre" />
            </form>
            <p>Nombre d'arbres dans votre sélection : {trees.length}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Variété</th>
                        <th>Hauteur (m)</th>
                        <th>Diamètre (cm)</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {trees.map((tree) =>
                        <tr key={tree.fields.idbase}>
                            <td>{tree.fields.libellefrancais}</td>
                            <td>{tree.fields.hauteurenm}</td>
                            <td>{parseInt(tree.fields.circonferenceencm / Math.PI)}</td>
                            <td>{tree.geometry.coordinates[1]}</td>
                            <td>{tree.geometry.coordinates[0]}</td>
                        </tr>)}
                </tbody>
            </table >
        </React.Fragment>
    );
}
const page = (
    <section className="container">
        <h1>Arbres de Paris</h1>
        <Trees />
    </section>
);

ReactDOM.render(
    page,
    document.getElementById('root')
);
