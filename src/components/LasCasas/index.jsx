import { Container, Row, Col, List } from 'reactstrap'
import { LogoWhatsappBN, LogoInstagramBN, PhoneToolbar } from '../Icons'
function LasCasas() {
  return (
    <div id="arquitectura" className='section'>
        <Container className='pt-4'>
            <Row>
                <Col md="4" className='d-flex align-items-center'>
                    <div className='mb-5 ms-3'>
                        <h3>Agustin Rivas Vey</h3>
                        <h5>Arquitecto</h5>
                        <div style={{ width:'80px', display:'flex', justifyContent:'space-between'}}>
                            <a href="https://www.instagram.com/Arv.arquitectura/"><LogoInstagramBN width="32px" height="32px"/></a>
                            <a href="https://api.whatsapp.com/send/?phone=56934178361"><LogoWhatsappBN width="32px" height="32px"/></a>
                        </div>
                    </div>
                </Col>
                <Col md="8">
                    <p>
                        Construir una casa es un lindo proceso, una oportunidad que no se da muchas veces 
                        en la vida, hacerlo con buenos profesionales es fundamental para disfrutarlo y 
                        vivirlo de la mejor forma posible.<br/>

                        Un proyecto arquitectónico se basa en ofrecer a las personas un lugar que se adapte 
                        a sus necesidades de habitabilidad, permitiendo que los diferentes espacios puedan 
                        ser únicos, diseñados de acuerdo a los requerimientos específicos de los residentes.
                        <br/> 
                        Acá puedes revisar algunos de los proyectos diseñados por la oficina ARV arquitectura 
                        y construcción, 
                        quienes se han especializado tanto en el diseño como en la ejecución de los mismos, 
                        adecuándose a las complejidades de construir en el sur de Chile.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default LasCasas