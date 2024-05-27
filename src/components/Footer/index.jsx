import { Container, Row, Col } from 'reactstrap'
import Logo from '../../assets/images/logo-barro.png'
// import LogoVistaLomas from '../../assets/images/logo.png';

function Footer() {
  return (
    <div id="footer" className='section'>
        <Container>
            <Row className='border'>
                <Col>
                    <div style={{paddingLeft:'25px'}}>
                        <h5>Nombre</h5>
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='mailto:info@email.cl'>info@email.cl</a></h5> 
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='tel:+569xxx'>+56 9 0000 0000</a></h5>
                    </div>
                </Col>
                <Col>
                    <div style={{paddingLeft:'25px'}}>
                        <h5>Nombre</h5> 
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='gerencia@email.cl'>gerencia@email.cl</a></h5>
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='tel:+5600000000'>+56 9 0000 0000</a></h5>
                    </div>
                </Col>
                <Col className='d-flex flex-row justify-content-md-end justify-content-center align-items-center'>
                    <img src={Logo}  style={{ height:'140px'}} alt="logo-hacienda"/>
                    {/* <div style={{width:'contain', border:'1px solid white', marginLeft:'10px', marginRight:'25px'}}>
                        <img src={LogoVistaLomas}  style={{width:'60px'}} alt="logo-vistalomas"/>
                    </div> */}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer