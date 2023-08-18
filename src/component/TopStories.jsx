import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { LiaCalendarSolid } from "react-icons/lia";
const TopStories = () => {
  const data = [{}];
  return (
    <div className="top-stories">
      <div className="bg-gray-300 border-b-2">
        <div className="max-w-screen-xl flex mx-auto py-3 items-center">
          <button className="bg-red-500 text-white font-bold capitalize mr-6 px-5 py-3">
            top stories
          </button>
          <ReactTypingEffect
            text={["Juel er Bow Mara geche...."]}
            eraseSpeed={500}
          />
        </div>
      </div>
      {/* stories header */}
      <div className="stories-header max-w-screen-xl mx-auto py-5">
        <p className="text-red flex items-center gap-2">
          <LiaCalendarSolid />{" "}
          <p>August 17, 2023Last Update November 30, 2018 11:07 amAustralia</p>
        </p>
      </div>
    

      <div className="max-w-screen-xl mx-auto">
        <div className="mx-auto grid grid-cols-3 top-stories ">
          <div className="col-span-1">
            <div className="relative">
            <div className="relative">
            <img
                src="https://www.radiustheme.com/demo/wordpress/themes/barta/wp-content/uploads/2018/09/img_10-670x324.jpg"
                alt=""
              />
               <div
                  className="fade absolute top-0 left-0 w-full h-full "
                  style={{ backgroundColor: "#00000057" }}
                ></div>
            </div>
              <div className="absolute bottom-3 left-2">
                <h4 className="category bg-blue-500">sports</h4>
                <h2>Ducati ‘has all the cards’ to win 2017 MotoGP title,</h2>
              </div>
            </div>
            <div className="mt-1 relative text-white">
            <div className="relative">
            <img
                src="https://www.radiustheme.com/demo/wordpress/themes/barta/wp-content/uploads/2018/11/food7-670x324.jpg"
                alt=""
              />
               <div
                  className="fade absolute top-0 left-0 w-full h-full "
                  style={{ backgroundColor: "#00000057" }}
                ></div>
            </div>
              <div className="absolute bottom-3 left-2">
                <h4 className="category bg-black">food</h4>
                <h2>Ducati ‘has all the cards’ to win 2017 MotoGP title,</h2>
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-1">
            <div className="relative">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/barta/wp-content/uploads/2018/09/img_1-700x850.jpg"
                alt=""
              />
              <div className="absolute bottom-3 left-2">
                <h4 className="category bg-red-500">politics</h4>
                <h2>
                  The company behind Vespa built a cargo robot that follows
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="relative">
            <div className="relative">
            <img
                src="https://www.radiustheme.com/demo/wordpress/themes/barta/wp-content/uploads/2018/10/games_15-400x323.jpg"
                alt=""
              />
               <div
                  className="fade absolute top-0 left-0 w-full h-full "
                  style={{ backgroundColor: "#00000057" }}
                ></div>
            </div>
              <div className="absolute bottom-3 left-2">
                <h4 className="category bg-cyan-600">games</h4>
                <h2>Ducati ‘has all the cards’ to win 2017 MotoGP title,</h2>
              </div>
            </div>
            <div className="mt-2 relative">
            <div className="relative">
            <img
                src="https://www.radiustheme.com/demo/wordpress/themes/barta/wp-content/uploads/2018/10/tech_9-400x323.jpg"
                alt=""
              />
               <div
                  className="fade absolute top-0 left-0 w-full h-full "
                  style={{ backgroundColor: "#00000057" }}
                ></div>
            </div>
              <div className="absolute bottom-3 left-2">
                <h4 className="category bg-red-500">apple</h4>
                <h2>Ducati ‘has all the cards’ to win 2017 MotoGP title,</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
