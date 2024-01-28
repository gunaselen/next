import React, { Component } from "react";
import Slider from "react-slick";

const Sliders = (props:any) => {
const {lgslidesToShow,smslidesToShow,center,rows} = props
const settings = {
  dots: true,
infinite: true,
centerMode: center?true:false,
centerPadding: center?center:'0px',
speed: 300,
slidesToShow: rows?2:lgslidesToShow? lgslidesToShow :4,
slidesToScroll:rows?2:lgslidesToShow? lgslidesToShow :4,
rows: rows?2:1,
  



responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow:rows?2:center?1: 3,
    slidesToScroll:rows?2:center?1: 3,
    infinite: true,
    dots: false,
    
  }
},
{
  breakpoint: 600,
  settings: {
    centerPadding: center?"100px":'0px',
    slidesToShow: rows?2:center?1:smslidesToShow? smslidesToShow :3,
    slidesToScroll:rows?2:center?1:smslidesToShow? smslidesToShow :3,
    dots: true,
    arrows: false,

  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: center?"60px":'0px',
    rows:1,
  }
},{
  breakpoint: 400,
  settings: {
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: center?"10px":'0px',
    rows:1,
  }
}

],
}
    return (
      <>
        <Slider {...settings}>
        {props.children}

        </Slider>
      </>
    )
  }

  export default Sliders
