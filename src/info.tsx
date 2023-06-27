import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="text-center px-5  text-white">
        <h2 className="  text-4xl lg:text-6xl mb-10 text-black ">Today is..</h2>
        <Slider {...settings}>
          
         <div className=" text-[22px] mb-10 text-white ">
            <h3>&ldquo;วันนี้วันเสาร์&ldquo;</h3>
          </div>
          <div>
            <h3 className=" text-[22px]">&ldquo;พรุ่งนี้วันอาทิตย์&ldquo;</h3>
          </div>
          <div>
            <h3 className="text-[22px]">&ldquo;มะรืนวันจันทร์&ldquo;</h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}                                                                                                     