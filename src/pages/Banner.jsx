import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "../styles/banner.css";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    nextArrow: <MdNavigateNext />,
    prevArrow: <GrFormPrevious />,
  };

  return (
    <div className="banner max-w-screen-xl mx-auto">
      <div className="banner-header">
        <div className="banner-header-slider grid grid-cols-2 ">
          <button className="py-4 px-8 bg-red-500 capitalize text-white">top news</button>
          <div className=" basis-[90%]">
            <Slider>
              {[
                {
                  img: "https://rstheme.com/products/html/news24/news-magazine/images/breaking/5.jpg",
                  heading: " Aaron Rogars Citizen",
                },
                {
                  img: "https://rstheme.com/products/html/news24/news-magazine/images/breaking/5.jpg",
                  heading: " Aaron Rogars Citizen",
                },
                {
                  img: "https://rstheme.com/products/html/news24/news-magazine/images/breaking/5.jpg",
                  heading: " Aaron Rogars Citizen",
                },
              ].map((element) => {
                const { img, heading } = element;
                return (
                  <div className="flex items-center">
                    <img src={img} alt="" />
                    <Link to="/" className="ms-3">
                      {heading}
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="mx-auto flex gap-3">
        <div className="left max-w-[60%]">
          <Slider {...settings}>
            {[
              "https://rstheme.com/products/html/news24/news-magazine/images/slider/slide_3.jpg",
              "https://rstheme.com/products/html/news24/news-magazine/images/slider/slide_1.jpg",
              "https://rstheme.com/products/html/news24/news-magazine/images/slider/slide_3.jpg",
            ].map((img) => {
              return (
                <div
                  className="item_ relative"
                  style={{
                    maxWidth: "content-fit !important",
                  }}
                >
                  <img src={img} alt="" />
                  <div className="content absolute bottom-8 left-10 z-[11111111]">
                    <div className="flex items-center gap-5 mb-3">
                      <p className="bg-red-500 text-white px-3">world</p>
                      <p className="date text-white">November 28, 2019</p>
                      <p className="comment text-white flex items-center gap-2">
                        <FaRegComment /> <span>50</span>
                      </p>
                    </div>
                    <div className="">
                      <h3 className="text-4xl font-bold text-white">
                        <span className="text-red-500">JOHN</span> TO REWRITE A
                        DIRECTIVE ON DEGRESS
                      </h3>
                      <p className="text-white mt-3">
                        THE EXHIBITION BANKSY DOESN’T WANT TO SEE WHLE
                        TRAVELLING HEAR.
                      </p>
                    </div>
                  </div>
                  <div
                    className="fade absolute top-0 left-0 w-full h-full "
                    style={{ backgroundColor: "#00000057" }}
                  ></div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="right-side-news flex flex-col">
          {[
            {
              category: "Business",
              date: "2 Novembar 2022",
              title: "Trudeau Forced To Refugees.",
              img: "https://rstheme.com/products/html/news24/news-magazine/images/sidebar-images/2.jpg",
            },
            {
              category: "Health",
              date: "The Exhibition Bankasy",
              title: "Trudeau Forced To Refugees.",
              img: "https://rstheme.com/products/html/news24/news-magazine/images/sidebar-images/2.jpg",
            },
            {
              category: "Science",
              date: "2 Novembar 2022",
              title: "Hurricane Harvey: Evacuations.",
              img: "https://rstheme.com/products/html/news24/news-magazine/images/sidebar-images/3.jpg",
            },
          ].map((element, index, arr) => {
            const { category, date, img, title } = element;
            return (
              <div
                className="item_ relative mb-[1px]"
                style={{
                  maxWidth: "content-fit !important",
                }}
              >
                <img src={img} alt="" />
                <div className="content absolute bottom-5 left-5 z-[11111111]">
                  <div className="items-center gap-5">
                    <p className="bg-red-500 text-white px-3 inline py-1 text-sm">
                      {category}
                    </p>
                    <p className="date text-white text-sm">{date}</p>

                    <h3 className="text-xl font-bold text-white">{title}</h3>
                  </div>
                </div>
                <div
                  className="fade absolute top-0 left-0 w-full h-full "
                  style={{ backgroundColor: "#00000057" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
