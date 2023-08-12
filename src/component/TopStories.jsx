import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TopStories = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default TopStories;
