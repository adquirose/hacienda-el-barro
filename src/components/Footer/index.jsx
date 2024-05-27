import { Container, Row, Col } from 'reactstrap'
import Logo from '../../assets/images/logo.png'
// import LogoVistaLomas from '../../assets/images/logo.png';

function Footer() {
  return (
    <div id="footer" className='section'>
        <Container>
            <Row className='border'>
                <Col>
                    <div style={{paddingLeft:'25px'}}>
                        <h5>Fabián Tropa</h5>
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='mailto:info@parcelaciondonadominga.cl'>info@parcelaciondonadominga.cl</a></h5> 
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='tel:+56972142535'>+56 9 7214 2535</a></h5>
                    </div>
                </Col>
                <Col>
                    <div style={{paddingLeft:'25px'}}>
                        <h5>Emilio Schenettler</h5> 
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='gerencia@parcelaciondonadominga.cl'>gerencia@parcelaciondonadominga.cl</a></h5>
                        <h5><a style={{color:'inherit', textDecoration:'none'}} href='tel:+56968012940'>+56 9 6801 2940</a></h5>
                    </div>
                </Col>
                <Col className='d-flex flex-row justify-content-md-end justify-content-center align-items-center pt-3'>
                    <img src={Logo}  style={{ height:'60px'}} alt="logo-dona-dominga"/>
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