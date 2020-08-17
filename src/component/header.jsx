import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/icon-72x72.png'

export default function header() {
	return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-pink-700 p-6">
        <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={Logo} style={{width: 'auto', height: '50px'}} alt="Logo icon" className="mr-3 -mt-4 -mb-4" />
          <span className="font-semibold text-xl tracking-tight">SCSS Compiler</span>
        </Link>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>
                Menu
              </title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="navbar-item w-full xs:hidden sm:hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="sass-css" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              SASS
            </Link>
            <Link to="css-scss" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              CSS
            </Link>
          </div>
          <div>
            <a href="https://github.com/dicka88/scss-compiler" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              <i className="fa fa-github"></i>
              <span> Github</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
	)
}
