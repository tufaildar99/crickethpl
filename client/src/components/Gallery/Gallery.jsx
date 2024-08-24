// src/components/Gallery/Gallery.js
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Gallery</h2>
      <Slider {...settings} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </Slider>

      <div className={styles.viewAllWrapper}>
        <Link to="/gallery" className={styles.viewAllButton}>
          View All
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
