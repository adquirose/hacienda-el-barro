import { Container, Row, Col } from 'reactstrap'
import ImgProyecto from '../../assets/images/proyecto.jpg';
import ImgCondominio from '../../assets/images/urbanizacion.jpg';

function ElCondominio(){
    return(
        <div id="urbanizacion" className='section'>
            <Container>
                <Row>
                    <Col sm="12" md="6">
                        <div className='image-proyecto-container'>
                            <div style={{position:'absolute', zIndex:6, top:'20px', left:'0'}}>
                                {/* <h4 className='ps-3 mb-0'>+ Amplitud</h4> */}
                                {/* <div className='subraya'/> */}
                            </div>
                            <img src={ImgCondominio} className="image-proyecto" alt="img-condominio"/>
                        </div>
                        
                    </Col>
                    <Col sm="12" md="6" className='pt-3 pt-md-0'>
                        <div className='pt-4 pt-sm-0'>
                            <h2>URBANIZACIÓN</h2>
                            <div className='subraya bg-white'/>
                        </div>
                        <p>
                            La parcelación cuenta con portón de acceso, agua de pozo, 
                            luz y posibilidad de fibra óptica. <br/>
                            Además contamos con alianzas estratégicas que te ayudarán a realizar 
                            tus caminos de acceso, movimiento de tierras, limpieza de terreno,
                            entrega de áridos, jardinería u otra tarea similar que podrías necesitar 
                            para la construcción de tu casa.

                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
function ElProyecto() {
  return (
    <div id="proyecto" className='section'>
        <Container>
            <Row className='mt-3'>
                <Col sm="12" md="6" className='order-2 order-md-1 pt-3 pt-md-0' >
                    <div className='pt-4 pt-sm-0'>
                        <h2>EL PROYECTO</h2>
                        <div className='subraya bg-white'/>
                    </div>
                    <p>
                        Parcelación Doña Dominga es un proyecto donde los sueños toman forma. <br/>
                        Un lugar pensado para la familia que ofrece amplios espacios
                        en torno a la naturaleza. 
                        Una propuesta estratégica para vivir de forma tranquila, 
                        pero siempre conectado con la ciudad.
                    </p>
                </Col>
                <Col sm="12" md="6" className='order-1 order-md-2'>
                    <div className='image-proyecto-container'>
                        <div style={{position:'absolute', zIndex:6, top:'20px', left:'0'}}>
                            {/* <h4 className='ps-3 mb-0'>+ Arquitectura</h4> */}
                            {/* <div className='subraya'/> */}
                        </div>
                        <img src={ImgProyecto} className="image-proyecto" alt="img-proyecto"/>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
function Proyecto(){
    return(
        <div id="proyecto-container">
            <ElProyecto/>
            <ElCondominio/>
            <div className='d-flex justify-content-center mt-4'>
                <button onClick={()=> window.open('./brochure.pdf','_blank')} className='button'>VER BROCHURE DIGITAL</button>
            </div>
        </div>
    )
}
export default Proyecto

