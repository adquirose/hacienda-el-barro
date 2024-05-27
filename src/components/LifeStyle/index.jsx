import { Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import Lf1 from '../../assets/images/lifestyle/gal1.jpg';
import Lf2 from '../../assets/images/lifestyle/gal2.jpg';
import Lf3 from '../../assets/images/lifestyle/gal3.jpg';
import Lf4 from '../../assets/images/lifestyle/gal4.jpg';
import Lf5 from '../../assets/images/lifestyle/gal5.jpg';
import Lf6 from '../../assets/images/lifestyle/gal6.jpg';
import Lf7 from '../../assets/images/lifestyle/gal7.jpg';
import Lf8 from '../../assets/images/lifestyle/gal8.jpg';
import Lf9 from '../../assets/images/lifestyle/gal9.jpg';
import Lf10 from '../../assets/images/lifestyle/gal10.jpg';
import Lf11 from '../../assets/images/lifestyle/gal11.jpg';
import Lf12 from '../../assets/images/lifestyle/gal12.jpg';
import Lf13 from '../../assets/images/lifestyle/gal13.jpg';
import Lf14 from '../../assets/images/lifestyle/gal14.jpg';
import Lf15 from '../../assets/images/lifestyle/gal15.jpg';


function LifeStyle() {
  return (
    <div id="lifestyle" className="section">
        <Container>
                <Row>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={15}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                              width: 640,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 2,
                            },
                          }}
                        >
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf1} alt="lf1-image"/>
                            </div>
                        </SwiperSlide>
                       
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf3} alt="lf3-image"/>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf4} alt="lf3-image"/>
                            </div>
                        </SwiperSlide> */}
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf5} alt="lf3-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf2} alt="lf2-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf6} alt="lf3-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf7} alt="lf3-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf8} alt="lf3-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf9} alt="lf9-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf10} alt="lf10-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf11} alt="lf11-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf12} alt="lf12-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf13} alt="lf13-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf14} alt="lf14-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf15} alt="lf15-image"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Container>
    </div>
  )
}

export default LifeStyle