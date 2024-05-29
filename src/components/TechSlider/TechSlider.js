import React from 'react';
import Slider from 'react-slick';
import './TechSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TbBrandTypescript,
  TbBrandVue,
  TbBrandReact,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandStorybook,
  TbBrandWordpress,
  TbBrandMysql,
  TbBrandGit,
  TbBrandSass,
  TbBrandGoogleAnalytics,

} from "react-icons/tb";

const TechSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <div className='slick-box'>
          <TbBrandTypescript size="2em" />
          <span className="slick-box-text">TypeScript</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandVue size="2em" />
          <span className="slick-box-text">Vue.js</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandReact size="2em" />
          <span className="slick-box-text">React.js</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandCss3 size="2em" />
          <span className="slick-box-text">CSS3</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandSass size="2em" />
          <span className="slick-box-text">SCSS</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandHtml5 size="2em" />
          <span className="slick-box-text">HTML5</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandStorybook size="2em" />
          <span className="slick-box-text">StoryBook</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandWordpress size="2em" />
          <span className="slick-box-text">WordPress</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandMysql size="2em" />
          <span className="slick-box-text">MySQL</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandGit size="2em" />
          <span className="slick-box-text">Git</span>
        </div>
      </div>
      <div>
        <div className='slick-box'>
          <TbBrandGoogleAnalytics size="2em" />
          <span className="slick-box-text">Google Analytics</span>
        </div>
      </div>
    </Slider>
  );
}

export default TechSlider;