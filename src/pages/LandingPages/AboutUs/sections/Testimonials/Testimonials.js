import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import MKTypography from 'components/MKTypography';
import Rating from '@mui/material/Rating';
import "./Testimonials.css";
import data from './data-test';

const style={
  backgroundColor:"#192841"
}

function Testimonials() {
  const [people] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);


  return (
    <section className="section" style={style}>
      <div className="title">
      
          <MKTypography variant="h2">Testimonials</MKTypography>
        
      </div>
      
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, country, quote,star} = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
       

          return (
            <><article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{country}</p>
            

              <p className="text">{quote}</p>
            </article>
            
            <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{country}</p>
                <Rating name="half-rating-read" defaultValue={star} precision={0.5} readOnly />
                 <p className="text">{quote}</p>
               
               
                
              </article></>
          );
        })}
        <button type="button" className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft fontSize="40px"/>
        </button>
        <button type="button" className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight fontSize="40px"/>
        </button>
      </div>
   
    </section>
  );
}

export default Testimonials;
