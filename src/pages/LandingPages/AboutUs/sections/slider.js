/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '@material-ui/core/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FaPython,FaJava,FaPhp, FaReact,FaNodeJs } from "react-icons/fa";
import { SiJavascript , SiMysql} from "react-icons/si";
import {AiOutlineHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import './app.css';
import Weather from "assets/images/Weather.png";
import MKTypography from 'components/MKTypography';
import { projectData } from './data';


const style= {
  color: "white"
}
const bgstyle = {
  height: "1500px"
}
const stylem = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#192841',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MAX_LENGTH = 20;
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function Proj() {
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

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
    <div id= "work" >
    <div className="App" >
     
      <Slider {...settings} >
        {projectData.map((item) => (
          <div className="card" >
            <div className="card-top" >
              <img 
                src={defaultImage[item.title] === item.title
                  ? defaultImage.linkDefault
                  : item.linkImg}
                alt={item.title}
                onClick={()=> window.open("https://www.facebook.com", "_blank")} 
                onError={handleErrorImage} />
                
              <MKTypography variant="h4"  mt={2} ml={3} mb={3} style={style}>{item.title}</MKTypography>
            </div>
            <div className="mid">
            <MKTypography variant="h7" mt={2} ml={3} mb={3} >{`${String(text).substring(0, MAX_LENGTH)}...`}<Button type="button" 
      onClick={handleOpen}>
        See More
      </Button></MKTypography>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={stylem}>
    <MKTypography id="modal-modal-title" variant="h3" color="white" component="h2">
     Project Description
    </MKTypography>
    <MKTypography id="modal-modal-description" color="white" sx={{ mt: 2 }}>
     {text}
    </MKTypography>
  </Box>
</Modal>
            </div>
            <div className="card-bottom" style={bgstyle}>
          <FaPython size={30}/> <SiJavascript  size={30}/> <FaJava  size={30}/> <AiOutlineHtml5  size={30}/> <DiCss3  size={30}/> <FaPhp  size={30}/>  <SiMysql  size={30}/> <FaReact  size={30}/> <FaNodeJs  size={30}/> &nbsp;
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default Proj;
