import { Container, Row, Col, List } from 'reactstrap'
import { LogoWhatsappBN, LogoInstagramBN, PhoneToolbar } from '../Icons'
function LasCasas() {
  return (
    <div id="arquitectura" className='section'>
        <Container className='pt-4'>
            <Row>
                <Col md="4" className='d-flex align-items-center'>
                    <div className='mb-5 ms-3'>
                        <h3>Monanti</h3>
                        <h5>Constructora</h5>
                        <div style={{ width:'80px', display:'flex', justifyContent:'space-between'}}>
                            <a href="https://www.instagram.com/#/"><LogoInstagramBN width="32px" height="32px"/></a>
                            <a href="https://api.whatsapp.com/send/?phone=#"><LogoWhatsappBN width="32px" height="32px"/></a>
                        </div>
                    </div>
                </Col>
                <Col md="8">
                    <p style={{textAlign:'justify'}}>
                        Constructora Monanti. <br/>Nuestro destacado proyecto, 
                        la Casa Modular Quillay, estructura completamente transportable, 
                        fabricada en taller y trasladada hasta el terreno final, 
                        27 m² en un solo piso, 1 dormitorio, 1 baño, Living-Comedor, 
                        Cocina Integrada. <br/>
                        Entrega en solo *6 semanas* Posibilidad de personalización y expansión.<br/> 
                        Arquitectos disponibles para adaptar el diseño a tus preferencias. <br/>
                        Esta estructura es completamente transportable. <br/>
                        Solicita una cotización personalizada.
                    </p>
                    
                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-4'>
                        <button onClick={()=> window.open('./brochure.pdf','_blank')} className='button'>VER BROCHURE DIGITAL</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default LasCasas