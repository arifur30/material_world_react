import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
const LatestNews = () => {
  return (
    <div className="latest_news grid max-w-screen-xl grid-cols-2 py-8 m-auto gap-2">
      <div className="left-side col-span-7">
        <div className="flex items-center justify-between">
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
        <div className="flex mt-4 ">
          <img
            src="https://rstheme.com/products/html/news24/news-magazine/images/tab/1.jpg"
            alt=""
          />
          <div className="right-side bg-black text-white p-5">
            <div className=""></div>
            <h3 className="text-xl"></h3>
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
        </div>
        <div className="right-side col-span-3">
          <div className="social-media">
            <div className="border-spacing-1 p-3 flex items-center border-2 gap-2 ">
              <button className="facebook bg-blue-400">
                <BiLogoFacebook />
                <p>4033,34 likes</p>
              </button>
              <button className="twitter bg-blue-500">
                <FaTwitter />
                <p>234,243 followers</p>
              </button>
              <button className="signal bg-orange-600">
                <AiOutlineWifi className=" transform rotate-45 scale-[1.4]"/>
                <p>234,421 subscriber</p>
              </button>
            </div>
            <img src="https://rstheme.com/products/html/news24/news-magazine/images/add/2.jpg" alt="" />
         
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
