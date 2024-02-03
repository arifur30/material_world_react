import React, { useState } from "react";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "../styles/banner.css";
import { getAllData,getInternationalOne,getNationalOne,getPoliticalOne } from "../Service/api";
import { getAllByAltText } from "@testing-library/react";

const Banner = () => {
  const [recent,setRecent]=useState([])
  const [breaking,setBreaking]=useState([])
 console.log(breaking)
  console.log(recent)
  useEffect(()=>{
    const getAll=async()=>{
      const data=await getAllData();
      setRecent(data);

    }
  getAll()
  const getAll2=async()=>{
    const store=[]
    const data=await getInternationalOne();
    store.push(data);
 
    const data2=await getNationalOne();
    store.push(data2)
    const data3=await getPoliticalOne();
    store.push(data3)
    setBreaking(store)
    

  }
getAll2();

  },[])
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
  // const settings2 = {
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 100,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   nextArrow: <MdNavigateNext />,
  //   prevArrow: <GrFormPrevious />,
  // };

  return (
    <div className="banner max-w-screen mx-auto gap-2">
      <div className="banner-header ">
        <div className="banner-header-slider grid grid-cols-10 gap-2">
          <button className=" bg-red-500 capitalize text-white col-span-1 col-start-1">
            top news
          </button>
          <div className="col-span-9 mr-2 ps-3 col-start-2 bg-black top-banner">
            <Slider slidesToShow={2} autoplay={true}>
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
                  <div className=" text-white">
                    <div className="flex items-center">
                      <img src={img} className="max-w-full" alt="" />
                      <a href="/" className="ms-3">
                        {heading}
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl md:flex gap-3 ">
        <div className="banner-left md:w-[50%]  w-[100%] flex-1 relative">
          <Slider {...settings}>
            {recent?.slice(0,4).map((item) => {
              return (
                <div
                  className=" h-[500px]  w-full "
                  // style={`background-image:url(${item.image})`}
                  // style={{
                   
                >
                <div className="relative w-full">
               <img src={item.image} alt="" width={1000} height={500}className="w-full"  style={{position:"absolute",height:"500px"}}/>
               </div>
                 
                  <div className="content absolute bottom-8 left-10 z-[1111111]">
                    <div className="flex items-center gap-5 mb-3">
                      <p className="bg-red-500 text-white px-3">{item.category}</p>
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
        <div className="right-side-news  flex flex-col">
          {/* {[
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
          ].map((element, index, arr) => { */}
          {breaking.map((item)=>(
            item.map((element)=>(
            
            
              <div
                className="item_ relative mb-[1px]  "
                style={{
                  maxWidth: "content-fit !important",
                }}
              >
                <img src={element.image} alt="" className={'w-full'}style={{height:"200px"}}/>
                <div className="content absolute bottom-5 left-5 z-[11111111]">
                  <div className="items-center gap-5">
                    <div className="flex gap-2">
                    <p className="bg-red-500 text-white px-3 inline py-1 text-sm">
                      {element.category}
                    </p>
                    <p className="bg-blue-500 text-white px-3 inline py-1 text-sm">
                      {element.tag}
                    </p>
                    </div>
                    <p className="date text-white text-sm">{element.date}</p>

                    <h3 className="text-xl font-bold text-white">{element.title}</h3>
                  </div>
                </div>
                <div
                  className="fade absolute top-0 left-0 w-full h-full "
                  style={{ backgroundColor: "#00000057" }}
                ></div>
              </div>
            
              ))))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
