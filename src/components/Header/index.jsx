import { Container, Row, Col } from 'reactstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { DownArrow } from '../Icons';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import HeaderImg1 from '../../assets/images/header/header1.jpg';
import HeaderImg2 from '../../assets/images/header/header2.jpg';
import HeaderImg3 from '../../assets/images/header/header3.jpg';

const Card= () => {
  return(
    <Container>
      <Row className='justify-content-center'>
        <Col className='col-auto'>
          <div style={{display:'flex',justifyContent:'space-between', alignItems:'center', backgroundColor:'white', height:'30px', width:'298px', padding:'10px', borderRadius:'5px'}}>
            <span style={{color:'#14342e', fontFamily:'Josefin Sans', fontWeight:500, lineHeight:1, fontSize:'14px'}}>
              PARCELAS DESDE
            </span>
            <DownArrow width="16px" height="16px" fill="#14342e"/>
          </div>
          <div style={{paddingBottom:'10px', paddingTop:'10px'}}>
            <span style={{fontFamily:'Josefin Sans', fontSize:'110px', fontWeight:'600', lineHeight:1}}>
              1.590
            </span> 
            <span style={{fontFamily:'Josefin Sans', fontSize:'40px', fontWeight:'400'}}>
              UF
            </span>
          </div>
          <div className='card-container'>
              <p className="item-1 color-dark fs-6 fw-semibold pt-2">
                CRÉDITO DIRECTO
              </p>
              <div className='item-2 color-white d-flex flex-row'>
                <p className='fs-6 fw-semibold pt-1' >
                  PIE DEL 40%
                </p>
                <p className='fs-mini fw-normal color-dark flex-shrink-1 ps-1'>
                  saldo hasta <br/>en 36 cuotas
                </p>
              </div>   
            <div className='item-3 d-flex justify-content-center'>
              <p className='color-dark fs-super fw-semibold pt-2'>0</p> 
            </div>
            <div className='item-4 d-flex flex-column justify-content-start'>
              <p className='color-dark fs-2 fw-semibold'>%</p>
              <p className='color-dark fs-6 fw-normal'>INTERÉS</p>
            </div>
          </div>
        </Col>
      </Row>  
    </Container>
  )
}
function Header() {
  return (
    <div id="header">
      <Container>
        <Row className='d-flex justify-content-center'>
          <div style={{position:'relative'}} className='header-container'>
            <Swiper
              pagination={{
                clickable: true
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide><img src={HeaderImg1} alt="ext1"/>
                <div className="d-flex justify-content-center align-items-md-center align-items-end pb-5 pb-md-0" style={{position:'absolute', width:'100%', height:'100%'}}>
                  <Container>
                    <Row className='justify-content-center'>
                      <Col className='col-md-4 col-12'>
                        <p style={{fontFamily:'Josefin Sans', lineHeight:'1',fontSize:'30px', fontWeight:'500', marginBottom:0}} className='text-center'>
                          vive inmerso en la
                        </p>
                        <p style={{fontFamily:'Josefin Sans', lineHeight:'1.1', fontSize:'42px', fontWeight:'500',marginBottom:0}} className='text-center'>NATURALEZA</p>
                        <p style={{fontFamily:'Josefin Sans', lineHeight:'1', fontSize:'22px', fontWeight:'200',marginBottom:0}} className='text-center'>a sólo minutos de la ciudad.</p>
                      </Col>
                    </Row>  
                  </Container>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={HeaderImg2} alt="ext2"/>
                <div className="d-flex justify-content-center align-items-md-center align-items-end pb-5 pb-md-0" style={{position:'absolute', width:'100%', height:'100%'}}>
                  <Card/>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={HeaderImg3} alt="ext2"/>
                <div className="d-flex justify-content-center align-items-md-center align-items-end pb-5 pb-md-0" style={{position:'absolute', width:'100%', height:'100%'}}>
                  <Container>
                    <Row className='justify-content-center'>
                      <Col className='col-md-4 col-12'>
                        <p style={{fontFamily:'Josefin Sans', lineHeight:'1',fontSize:'30px', fontWeight:'500', marginBottom:0}} className='text-center'>
                          calidad de vida y
                        </p>
                        <p style={{fontFamily:'Josefin Sans', lineHeight:'1.1', fontSize:'42px', fontWeight:'500',marginBottom:0}} className='text-center'>TRANQUILIDAD</p>
                        <p style={{fontFamily:'Josefin Sans', lineHeight:'1', fontSize:'22px', fontWeight:'200',marginBottom:0}} className='text-center'>comienza a vivir tu sueño.</p>
                      </Col>
                    </Row>  
                  </Container>
                </div>
              </SwiperSlide>
              
            </Swiper>
            
          </div>
        </Row>
      </Container>
    </div>
  )
}
export default Header
