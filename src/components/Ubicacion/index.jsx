/* eslint-disable no-unused-vars */
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Container, Row } from 'reactstrap'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = { 
  lat: -32.73906612400309,
  lng: -70.55084834856254
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBX-fT0cZLTKydQN_HFfeCfHKq_Um_4cSQ"
  })
  
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(12)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center}/>
        
      </GoogleMap>
  ) : <></>
}

const Ubicacion = () => {
    return(
        <div id="ubicacion" >
            <Container>
                <Row>
                    <div style={{minHeight:'550px',paddingBottom:'24px'}}>
                        <Map/>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Ubicacion

