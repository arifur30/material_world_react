import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";
import {withRouter} from 'react-router-dom'
export default function Header({history}) {
  const [navbar, setNavbar] = useState(false);
  const [open,setOpen]=useState(false);
  const cat=['Politics','Education','Agriculture','Sports']
  useEffect(()=>{
 console.log(window.location.pathname)

  },[])

  return (
    <nav className="w-70% bg-transparent shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
            <h2 className="text-2xl font-bold">THE MATERIAL WORLD</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="">Blog</Link>
              </li>
              <li>
              <button className={'flex justify items-center'}onClick={()=>setOpen(!open)}>News<span><IoIosArrowDown/></span></button>
                <div className={`${open?'block':'hidden'} xl:absolute top-19.5 bg-white rounded rounded-5 z-10   px-[20px] py-[10px]`}>
                
                  <ul >
                    {
                      cat.map((item)=>(
                        <Link to={`/news/${item}`}><li onClick={()=>setOpen(false)}className="text-black my-2 hover:bg-gray-500 hover:text-white pr-5 pl-2">{item}</li></Link>

                      ))
                    }


                  </ul>
                </div>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="about">About US</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/contact">Contact US</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
