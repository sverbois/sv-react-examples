import React from 'react';
import {NamurMap} from './LeafletMaps'

function App() {
  return (
    <div id="page-content">
      <NamurMap map_height="400px"/>
      <NamurMap map_height="200px"/>
    </div>
  );
}

export default App;
