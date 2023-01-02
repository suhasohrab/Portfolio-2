import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsGithub } from "react-icons/bs";
import './app.css';
import Weather from "assets/images/Weather.png";
import MKTypography from 'components/MKTypography';
import MKButton from "components/MKButton";
import { projectData } from './data';


const style= {
  color: "white"
}

function Proj() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault:Weather,
    }));
  };

  return (
    <div id= "work">
    <div className="App">
     
      <Slider {...settings} >
        {projectData.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={defaultImage[item.title] === item.title
                  ? defaultImage.linkDefault
                  : item.linkImg}
                alt={item.title}
                onError={handleErrorImage} />
              <MKTypography variant="h1" style={style}>{item.title}</MKTypography>
            </div>
            <div className="card-bottom">
            <MKButton color="info" href={item.Github} target="_blank">
          <BsGithub /> &nbsp;
        </MKButton>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default Proj;
