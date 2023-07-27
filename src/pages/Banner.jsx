import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import {FaRegComment} from "react-icons/fa";
import {MdNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr";
import '../styles/banner.css'


const Banner = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    autoplay:true,
    nextArrow:<MdNavigateNext/>,
    prevArrow:<GrFormPrevious/>
  };

  return (
    <div className="banner max-w-screen-xl mx-auto">
      <div className="mx-auto flex gap-3">
        <div className="left max-w-[60%]">
          <Slider {...settings}>
           {
            ["https://rstheme.com/products/html/news24/news-magazine/images/slider/slide_3.jpg","https://rstheme.com/products/html/news24/news-magazine/images/slider/slide_1.jpg","https://rstheme.com/products/html/news24/news-magazine/images/slider/slide_3.jpg"].map((img)=>{
              return(
                <div className="item_ relative" style={{
                  maxWidth:"content-fit !important"
                }}>
                  <img
                    src={img}
                    alt=""
                  />
                  <div className="content absolute bottom-8 left-10 z-[11111111]">
                    <div className="flex items-center gap-5 mb-3">
                      <p className="bg-red-500 text-white px-3">world</p>
                      <p className="date text-white">November 28, 2019</p>
                      <p className="comment text-white flex items-center gap-2"><FaRegComment/> <span>50</span></p>
                    </div>
                    <div className="">
                      <h3 className="text-4xl font-bold text-white">
                        <span className="text-red-500">JOHN</span> TO REWRITE A
                        DIRECTIVE ON DEGRESS
                      </h3>
                      <p className="text-white mt-3">
                        THE EXHIBITION BANKSY DOESN’T WANT TO SEE WHLE TRAVELLING
                        HEAR.
                      </p>
                    </div>
                  </div>
                  <div
                    className="fade absolute top-0 left-0 w-full h-full "
                    style={{ backgroundColor: "#00000057" }}
                  ></div>
                </div>
              )
            })
           }

          </Slider>
        </div>
        <div className="right-side-news grid-rows-1">
          <img
            src="https://rstheme.com/products/html/news24/news-magazine/images/sidebar-images/1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
