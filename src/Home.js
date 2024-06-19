import React, {useRef, useEffect, useState,Component  } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
    <section className='sec1'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
  
   <SwiperSlide><a href="#"><img src="/Images/yellow-banner-desktop.webp"/></a></SwiperSlide>
        <SwiperSlide><a href="#exotics"><img src="/Images/Exotics-desktop.webp"/></a></SwiperSlide>
        <SwiperSlide> <a href="#apply"><img src="/Images/Financing-desktop.webp"/></a></SwiperSlide>
        <SwiperSlide><a href="#experience"><img src="/Images/Crown-Exotics-Experience-desktop.webp"/></a></SwiperSlide>
        <SwiperSlide><a href="valueyourtrade"><img src="/Images/value-your-trade2-desktop.webp"/></a></SwiperSlide>
        <SwiperSlide><a href="services"><img src="/Images/service2-desktop.webp"/></a></SwiperSlide>
        <SwiperSlide><a href="offers"><img src="/Images/9f381120e658b095cc484db90d614241.png"/></a></SwiperSlide>
 

       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
       </section>


       <section className="sec2">
        <Container>
          <Row>
            <Col md={5} sm={12} className="bannarimg">
<img className="sec2lambo" src="/Images/red-lambo1.webp"/>
            </Col>
            <Col md={7} sm={12} className="bannartext">
       <h2>Exotic Cars</h2>
  <p>Explore the wide variety of vehicles here at Crown Exotics. <br/> Our masterpieces range from Bentley, Ferrari,<br/> Aston Martin, Lucid, Porsche and more.</p>
  <Button variant="outline-light">View Inventory</Button>
            </Col>
          </Row>
        </Container>
       </section>
      <section className="sec3">
        <Container>
          <Row>
            <Col md={4} sm={12}>

            <Slider {...settings}>
        <div className="firstcar">
          <img src="/Images/66d5340d5fb24528bf6d46368d0ff5af.jpg" />
          <h5>2023</h5>
          <h3> <span>BENTLEY</span> <br/> BENTAYGA EWB <br/> $200,474.00  </h3>
          <Link>DETAILS</Link>

        </div>
        <div className="secondcar">
          <img src="/Images/738f9d4ca3634f9db4122ea9d71f8e59.jpg"/>
          <h5>2023</h5>
          <h3> <span>CHEVOLET</span> <br/>CORVETTE<br/> $90,881.00  </h3>
          <Link>DETAILS</Link>

        </div>
        <div className="thirdcar">
          <img src="/Images/ddba810654f54f348c9eaeecb930e726.jpg"/>
          <h5>2019</h5>
          <h3> <span>LAMBORGHINI</span> <br/>HURACAN<br/> $390,990.00  </h3>
          <Link>DETAILS</Link>
          </div>
        <div className="fourthcar" >
          <img src="/Images/2127671088ac4aa2a743cf9d8d044605.jpg"/>
          <h5>2020</h5>
          <h3> <span>AUDI</span> <br/>S7<br/> $58,640.00  </h3>
<Link>DETAILS</Link>
        </div>
       
      </Slider>
            </Col>
          </Row>
          
        </Container>
      </section>
      <section className="sec4">
        <Container>
          <Row>
            <Col md={5} sm={12}>
            <img src="/Images/blue-diagonal-lambo.webp"/>
            </Col>
            <Col md={7} sm={12} className="sec4text">
            <h3> ARE YOU LOOKING FOR WHAT MAKES YOUR <br/> HEART POUND? </h3>
            <p>
            Present everywhere in the world, the Authorized Crown Exotic Dealers are ready to offer <br/> you an exclusive and personalized service to guide you through every step of your Crown <br/> Exotic experience. Whatever your requirements may be, a qualified team will support you <br/> from the time you make your purchase up to after-sales. Whether it is new or used, it <br/> doesn’t matter, driving a Crown Exotic vehicle is a unique thrill to be experienced and <br/> cherished.
            </p>
            <Button variant="outline-light">View Inventory</Button>
          
            <Button variant="outline-light">More About Us</Button>

            </Col>
          </Row>
        </Container>
      </section>
      <section className="sec5">
     <div className="background">
<h1>DASH CARS</h1>
     </div>
     <div className="sec5img">
      <img src="/Images/upscaled-light-car.webp"/>
     </div>
      </section>
     <Footer/>
    </>
  )
}

export default Home