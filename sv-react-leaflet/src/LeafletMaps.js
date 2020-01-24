import React from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';

// Voir https://medium.com/@nikjohn/creating-a-dynamic-jsx-marker-with-react-leaflet-f75fff2ddb9 pour marker dynamique

// On peut utiliser l'élément Icon react-semantic-ui
/*const icon = L.divIcon({
  className: '',
  html: ReactDOMServer.renderToString(<Icon name='chess rock' size='big' color='violet'/>)
});*/

// Voir d'autre options de serveurs de tiles sur https://leaflet-extras.github.io/leaflet-providers/preview/
/*<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/

const icon = L.divIcon({
  className: 'marker-icon',
  html: ReactDOMServer.renderToString(<span>S</span>)
});

export function NamurMap({map_height}) {
  const position = [50.464,4.866];
  const other_position = [50.470,4.861];
  const zoom = 13;

  return (
    <Map style={{'width': "100%",'height': map_height}} center={position} zoom={zoom}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          Vous êtes à l'EICVN.
        </Popup>
      </Marker>
      <Marker position={other_position} icon={icon}>
        <Popup>
          Ici c'est la gare.
        </Popup>
      </Marker>
    </Map>
  )
}
