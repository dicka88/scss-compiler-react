import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-scss";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

import Helmet from 'react-helmet'

// images
import cssSvg from '../assets/images/css3-icon.svg'
import sassSvg from '../assets/images/sass-icon.svg'

export default class Home extends Component {
  constructor(parent) {
    super(parent)
    this.state = {}
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <>
      <div className="flex justify-between items-center hidden xs:block mt-4 mb-1">
        <Helmet>
          <title>SCSS to CSS Compiler</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Helmet>
        <div className="relative">
          <ul id="editor-switcher" className="flex border-b">
            <li className="mr-1">
              <a href="#" id="editor-switcher_scss" onClick="editor_switcher('scss')" className="bg-white inline-block border-1 rounded-t py-2 px-4 hover:bg-pink-800 hover:text-white bg-pink-700 text-white font-semibold">SCSS</a>
            </li>
            <li className="mr-1">
              <a href="#" id="editor-switcher_css" onClick="editor_switcher('css')" className="bg-white inline-block border-1 rounded-t py-2 px-4 hover:bg-pink-800 hover:text-white">CSS</a>
            </li>
            <li className="mr-1">
              <a href="#" id="editor-switcher_demo" onClick="editor_switcher('')" className="bg-white inline-block border-1 rounded-t py-2 px-4 hover:bg-pink-800 hover:text-white">DEMO</a>
            </li>
            <button className="convert-button text-white absolute right-0 mr-2 w-8 h-8">
            <i className="material-icons">play_arrow</i>
          </button>
          </ul>
        </div>
      </div>
      <div className="flex mb-4 relative">
        <div className="w-1/2 xs:w-full mr-1 xs:mr-0 bg-gray-200 h-screen scss-wrapper">
          <div className="flex px-3 py-1 justify-between bg-white">
            <div style={{ margin: 'auto 0' }}>
              <img src={sassSvg} style={{height: '24px'}} alt="" />
            </div>
            <div>
              <button title="download" onClick="scssSaveFile()">
              <i className="material-icons">file_download</i>
            </button>
              <button title="copy" data-clipboard-target="#scss-editor" onClick="scssCopyClipboard()">
              <i className="material-icons">content_copy</i>
            </button>
              <button title="clear" onClick="scssClear()">
              <i className="material-icons">clear</i>
            </button>
              <button title="beautify scss" onClick="scssbeautify()">
              <i className="material-icons">format_paint</i>
            </button>
              <button title="fullscreen" onClick="scssFullscreen()">
              <i className="material-icons">fullscreen</i>
            </button>
            </div>
          </div>
          <AceEditor
            className="fullscreen"
            placeholder="Enter Here"
            mode="scss"
            theme="monokai"
            height="100%"
            width="100%"
            name="scss"
            onLoad={() => ''}
            onChange={() => ''}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={``}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
            />
        </div>
        <div className="w-1/2 xs:w-full ml-1 xs:ml-0 bg-gray-900 h-screen css-wrapper xs:hidden">
          <div className="flex px-3 py-1 justify-between bg-white">
            <div style={{ margin: 'auto 0' }} className="flex items-center justify-between">
              <img src={cssSvg} style={{height: '24px'}} alt="" />
              <span className="pl-2">Result</span>
              <span className="ml-4 convert-loading hidden">
                <i className="fa fa-cog fa-spin"></i>
              </span>
            </div>
            <div>
              <button title="download" onClick="cssSaveFile()">
              <i className="material-icons">file_download</i>
            </button>
              <button title="copy" onClick="cssCopyClipboard()">
              <i className="material-icons">content_copy</i>
            </button>
              <button title="fullscreen" onClick="cssFullscreen()">
              <i className="material-icons">fullscreen</i>
            </button>
            </div>
          </div>
          <AceEditor
            className="fullscreen"
            placeholder="Enter Here"
            mode="css"
            theme="monokai"
            height="100%"
            width="100%"
            name="css"
            onLoad={() => ''}
            onChange={() => ''}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={``}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
            />
        </div>
        <div className="convert xs:hidden">
          <button className="convert-button text-white">
          <i className="material-icons">play_arrow</i>
        </button>
        </div>
      </div>
      </>
    )
  }
}
