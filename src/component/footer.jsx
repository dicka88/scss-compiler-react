import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <footer>
      <div className="w-full bg-pink-900 p-8 pt-12 pb-10 mt-10 text-white">
        <div className="grid grid-flow-col xs:grid-flow-row xs:grid-rows-1 sm:grid-rows-2 grid-rows-1 gap-4">
          <div className="hover:shadow-outline rounded-md">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">What is SCSS ?</div>
              <p className="text-white text-base">
                SCSS : Syntactically Awesome Style Sheet is the superset of CSS. SCSS is the more advanced version of CSS. SCSS was designed by Hampton Catlin and was developed by Chris Eppstein and Natalie Weizenbaum.
              </p>
              <p>
                <a href="https://sass-lang.com" target="_blank" rel="nofollow noreferrer" className="underline">> More about SCSS</a>
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#css</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#scss</span>
            </div>
          </div>
          <div className="hover:shadow-outline rounded-md">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Different between SCSS and SASS</div>
              <p className="text-white text-base">
                SASS is used when we need a original syntax, code syntax is not required for SCSS. SASS follows strict indentation, SCSS has no strict indentation. SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use
                of semicolons and braces are mandatory.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#different</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#sass</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#scss</span>
            </div>
          </div>
          <div className="hover:shadow-outline rounded-md">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">All Converter</div>
              <p className="text-white text-base">
                <Link to="/" className="underline">> SCSS to CSS</Link>
              </p>
              <p>
                <Link to="/sass-css" className="underline">> SASS to CSS</Link>
              </p>
              <p>
                <Link to="/css-scss" className="underline">> CSS to SCSS</Link>
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#scss</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#sass</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#converter</span>
            </div>
          </div>
          <div className="rounded-md">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <i className="fa fa-envelope"></i> Hire me
              </div>
              <div className="flex justify-between">
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="yourmail@mail.com" />
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold ml-3 py-2 px-4 rounded">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#nodejs</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#php</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#vue</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center bg-pink-900 text-white p-8 pr-12">
        <span>Follow us on</span>
        <a href="https://instagram.com/dickaismaji" target="_blank" rel="nofollow noreferrer" className="ml-2" title="instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://facebook.com/dickaismaji" target="_blank" rel="nofollow noreferrer" className="ml-2" title="facebook">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="https://github.com/dicka88" target="_blank" rel="nofollow noreferrer" className="ml-2" title="github">
          <i className="fa fa-github-square"></i>
        </a>
        <a href="https://linkedin.com/in/dickaismaji" target="_blank" rel="nofollow noreferrer" nofollow className="ml-2" title="linkedin">
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>
      <div className="flex bg-gray-800 pt-1 pb-4 justify-center text-4md text-white">
        <small>Build with ❤️ by <a className="underline" href="https://github.com/dicka88">Dicka Ismaji</a> for developers</small>
      </div>
    </footer>
  )
}
