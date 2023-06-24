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
      <div className="text-center px-5 text-white ">
        <h2 className="    ">Today is..</h2>
        <Slider {...settings}>
          
         <div className=" text-[22px] ">
            <h3>"วันนี้วันเสาร์"</h3>
          </div>
          <div>
            <h3 className=" text-[22px]">"พรุ่งนี้วันอาทิตย์"</h3>
          </div>
          <div>
            <h3 className="text-[22px]">"มะรืนวันจันทร์"</h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}