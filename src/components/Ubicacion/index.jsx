import { Container, Row } from 'reactstrap'
import Mapa from '../../assets/images/mapa.png'

function Ubicacion() {
    const handleOnClickGM = () => {
        window.open('https://maps.app.goo.gl/AX9KsW2kX8VXBqz79','_blank')
    }
    const handleOnClickWaze = () => {
        window.open('https://ul.waze.com/ul?ll=-41.38589716%2C-72.94831753&navigate=yes&zoom=17','_blank')
    }
  return (
    <div id="ubicacion" className='section'>
        <Container>
            <Row className='d-flex align-items-center flex-column'>
                <img src={Mapa} style={{maxWidth:'740px', width:'100%', height:'auto'}} alt="img-mapa" />
                <div className='d-flex justify-content-center'>
                    <button onClick={handleOnClickGM} className='button my-4 me-1'>Ver en Googlemaps</button>
                    <button onClick={handleOnClickWaze} className='button my-4 ms-1'>Ver en Waze</button>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Ubicacion