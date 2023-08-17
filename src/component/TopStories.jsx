import React from "react";
import ReactTypingEffect from "react-typing-effect";
import {LiaCalendarSolid} from 'react-icons/lia'
const TopStories = () => {
  return (
    <div className="top-stories">
      <div className="bg-gray-100 border-b-2">
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
        <p className="text-red flex items-center gap-2"><LiaCalendarSolid /> <p>August 17, 2023Last Update November 30, 2018 11:07 amAustralia</p></p>
      </div>
      <h1 className="text-3xl text-green-600 text-center">working.....</h1>
    </div>
    
  );
};

export default TopStories;
