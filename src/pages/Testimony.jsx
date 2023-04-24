import "./testimony.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import director from "../assets/testimoney.png" ; 

export default function Testimony(){
    return(
        <> 
        <div className="testbody">
        <div className="college" >College Testimonials</div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="testcard">
            <div className="tstbox" >We took Seminarroom's Industry Interface activities which happen to be one of the high end program that enhances Employability quotient of students. It is a must program for every Graduate student. Taking this program has improved the industry exposure of our college.</div>
            <div className="sir"  >
                <img className="director" src={director} alt="hello"/>
            </div>
            <div className="by">Dr. B. G. Satyaprasad</div>
             <div className="by">Director, G.T. Institute</div>
        </div></SwiperSlide>
        <SwiperSlide><div className="testcard"></div></SwiperSlide>
        <SwiperSlide><div className="testcard"></div></SwiperSlide>
         
      </Swiper>
      </div>
        </>
    )
}