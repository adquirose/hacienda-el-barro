import { Container, Row, Col, List } from 'reactstrap'
import Img1 from '../../assets/images/barrio-entorno/img1.jpg'
import Img2 from '../../assets/images/barrio-entorno/img2.jpg'
import Img3 from '../../assets/images/barrio-entorno/img3.jpg'
import Img4 from '../../assets/images/barrio-entorno/img4.jpg'
import Img5 from '../../assets/images/barrio-entorno/img5.jpg'
import Img6 from '../../assets/images/barrio-entorno/img6.jpg'

import { Athletics, SquarePin, ShoppingBag } from '../Icons'
function BarrioEntorno() {
  return (
    <div id="barrio-entorno" className='section'>
      <Container>
        <Row>
          <Col lg="8" md="12" sm="12">
            <div className='pb-4'>
              <h2>BARRIO & ENTORNO</h2>
              <div className='subraya bg-white'/>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2,minmax(120px,1fr))', gridGap:'5px', justifyItems:'center'}}>
              <img src={Img1} style={{height:'auto'}} alt="img1"/>
              <img src={Img2} style={{height:'auto'}} alt="img2"/>
              <img src={Img3} style={{height:'auto'}} alt="img3"/>
              <img src={Img4} style={{height:'auto'}} alt="img4"/>
              <img src={Img5} style={{height:'auto'}} alt="img5"/>
              <img src={Img6} style={{height:'auto'}} alt="img6"/>
            </div>
          </Col>
          <Col lg="4" md="12" sm="12" className='d-flex flex-column justify-content-center pt-4'>
            <div>
              <div className='pb-2'>
                <SquarePin width="32" height="32" color="white" /><span className='ps-2'>UBICACIÓN</span>
              </div>
              <List>
                <li>Puerto Varas a 9 min.</li>
                <li>Puerto Montt a 15 min.</li>
                <li>Aeropuerto a 30 min.</li>
                <li>Ensenada a 45 min.</li>
                <li>Ruta 5 a 8 min.</li> 
              </List>
            </div>
            <div>
              <div className='pb-2'>
                <ShoppingBag/><span className='ps-2'>CENTROS COMERCIALES</span>
              </div>
              <List>
                <li>Mall Paseo Alerce</li>
                <li>Centro Comercial Doña Ema</li>
                <li>Supermercado</li>
                <li>Stripcenter</li>
              </List>
            </div>
            <div>
              <div className='pb-2'>
                <Athletics width="36" height="36" color="white"/><span className='ps-2'>CENTROS DEPORTIVOS</span>
              </div>
              <List>
                <li>Match Point Tenis</li>
                <li>Club de Tenis Puerto Varas</li>
                <li>Complejo Deportivo Mirador</li>
              </List>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
} 
export default BarrioEntorno