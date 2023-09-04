import React from 'react'

export default function Footer() {
  return (
    <footer className="lg:pl-20 font-open text-[#ced1de] py-5 bg-[#1e1f24] mt-auto">
    <div className="container px-5 py-19 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-2.5/4 md:w-1/2 w-full lg:pt-28">
        <h2 className="text-white text-[60px] text-black font-bold mb-3">The Material World</h2>
        
          <p className = "test-black text-[22px] mr-10">Hello this is the Material world. Welcome to our website. How are you?I am fine! I am also here for you!</p>
        </div>
      <div className="lg:w-1/4 md:w-1/2 w-full mt-20 text-[23px]">
        
        <nav className="lg:ml-20 list-none mb-10">
          <li>
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Home</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">About</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Team</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Author</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full mt-20 text-[23px]">
        <nav className="lg:-ml-5 list-none mb-10">
          <li className = "">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Agriculture</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Business</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Academics</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Entertainment</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">National</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">The World</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Sports</a>
          </li>
          <li className = "mt-3">
            <a href = "#" className="text-[#aaaaaa] hover:text-[#f88020] active:m-1 active:text-white">Op-Ed</a>
          </li>
        </nav>
      </div>
      </div>
    </div>
    <div className="bg-[#1e1f24]">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a href = "#" target = "_blank"className="hover:text-[#f88020] active:text-white flex title-font items-center md:justify-start justify-center text-white ml-3 text-xl">
        Terms of Service
      </a>
      <p className="lg:ml-10 flex title-font items-center md:justify-start justify-center text-white ml-3 text-xl">© 2023 The Material World</p>
      <a href = "#" target = "_blank"className="lg:ml-10 hover:text-[#f88020] active:text-white flex title-font items-center md:justify-start justify-center text-white ml-3 text-xl">
        Sitemap
      </a>
      <a href = "#" target = "_blank"className="lg:ml-10 hover:text-[#f88020] active:text-white flex title-font items-center md:justify-start justify-center text-white ml-3 text-xl">
        Contact
      </a>
      <span className="lg:pr-10 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className = "ml-5">
          <svg fill= "currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-8 h-8" viewBox="0 0 24 24">
            <a target = "_blank" className = "hover:fill-[#f88020] active:fill-white fill-white"href="https://www.facebook.com"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></a>
          </svg>
        </a>
        <a className = "ml-5">
          <svg fill= "currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-8 h-8" viewBox="0 0 24 24">
            <a target = "_blank" className = "hover:fill-[#f88020] active:fill-white fill-white"href="https://www.twitter.com"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></a>
          </svg>
        </a>
        <a className = "ml-5">
          <svg fill= "currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-8 h-8" viewBox="0 0 24 24">
            <a target = "_blank" className = "hover:fill-[#f88020] active:fill-white fill-white"href="https://www.linkedin.com"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path></a>
          </svg>
        </a>
       </span>
    </div>
    </div>
    </footer>

  )
}
