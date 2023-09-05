import React from "react";
import { BiLogoFacebook, BiMessage } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
const LatestNews = () => {
  return (
    <div className="latest_news md:flex max-w-screen-xl py-8 m-auto gap-2 px-4 md:px-0">
      <div className="left-side md:w-4/6">
        <div className="md:flex items-center justify-between">
          <h3 className="uppercase text-black text-xl font-bold">
            latest news
          </h3>
          <ul className="flex items-center gap-3">
            {["previous", "hot articles", "week", "top rated"].map(
              (el, index, arr) => {
                // this[-1].classList.add('active');
                return (
                  <li className="px-5 py-2 text-md capitalize bg-gray-200">
                    {el}
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="md:flex mt-4">
          <img
            src="https://rstheme.com/products/html/news24/news-magazine/images/tab/1.jpg"
            alt=""
          />
          <div className="right-side bg-black text-white p-5 w-[100%]">
            <div className="flex gap-3 items-center text-gray-300 mb-3">
              <div className="flex gap-2 items-center">
                <CgProfile />
                <p className="">James Bond</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>50</p>
                <BiMessage />
              </div>
            </div>
            <h3 className="text-xl hover:text-red-600 bold mb-3">
              Migrants Told: Stay In France Or Go Back To Your Country
            </h3>
            <p className="text-gray-400 w-4/6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex
              dolore sed ipsum eaque similique commodi,ae eos perspiciatis.
              Facere cumque quam a soluta molestiae nemo vitae obcaecati
              exercitationem sequi.
            </p>
            <button className="border-2 px-4 py-2 mt-2 capitalize bg-transparent text-white">
              learn more
            </button>
          </div>
        </div>
        <div className="md:flex border-2 mt-5 items-center justify-between p-3">
          {[
            {
              img: "https://rstheme.com/products/html/news24/news-magazine/images/tab/2.jpg",
              date: "June 28, 2017",
              title: "to soccer field closed",
            },
            {
              img: "https://rstheme.com/products/html/news24/news-magazine/images/tab/3.jpg",
              date: "June 28, 2017",
              title: "to soccer field closed",
            },
            {
              img: "https://rstheme.com/products/html/news24/news-magazine/images/tab/4.jpg",
              date: "June 28, 2017",
              title: "to soccer field closed",
            },

            {
              img: "https://rstheme.com/products/html/news24/news-magazine/images/tab/5.jpg",
              date: "June 28, 2017",
              title: "to soccer field closed",
            },
          ].map((element, index, arr) => {
            return (
              <div className="">
                <img src={element.img} alt="" />
                <p className="text-sm text-gray-400 mt-2">{element.date}</p>
                <h4 className="text-lg font-semiBold capitalize text-md">
                  {element.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-side ">
        <div className="social-media">
          <div className="border-spacing-1 p-3 flex items-center border-2 gap-2 mb-10">
            <button className="facebook bg-blue-400">
              <BiLogoFacebook />
              <p>4033,34 likes</p>
            </button>
            <button className="twitter bg-blue-500">
              <FaTwitter />
              <p>234,243 followers</p>
            </button>
            <button className="signal bg-orange-600">
              <AiOutlineWifi className=" transform rotate-45 scale-[1.4]" />
              <p>234,421 subscriber</p>
            </button>
          </div>
          <img
            src="https://rstheme.com/products/html/news24/news-magazine/images/add/2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
