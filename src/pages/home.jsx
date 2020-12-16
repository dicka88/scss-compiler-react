import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AceEditor from 'react-ace'
import Helmet from 'react-helmet'
import "ace-builds/src-noconflict/mode-scss";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

// helper
import debounce from '../utils/debounce'

// images
import cssSvg from '../assets/images/css3-icon.svg'
import sassSvg from '../assets/images/sass-icon.svg'

export default class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      scssValue: '',
      cssValue: '',
      tabActive: 'scss',
      activeButton: 'scss'
    }

    this.bounce = debounce(this.fetchScss, 1500)
  }

  componentDidMount() {

  }

  // componentDidUpdate() {

  // }

  handleScssChange(props, a) {
    this.setState({
      scssValue: props
    })
    this.bounce(this.fetchScss)
    console.log(props)
  }

  handleCopy(props) {

  }

  handleBeautify(props) {

  }

  handleDownload() {

  }

  handleZoom() {

  }

  handleConvert = () => {
    this.fetchScss()
  }

  fetchScss = async () => {
    console.log('fetchscss called')

    try {
      console.log(this.state)
      const scssVal = this.state.scssValue
      const req = await fetch("https://scsscompiler.herokuapp.com/api/scss-css", {
        method: 'POST',
        body: JSON.stringify({
          string: scssVal
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('do')
      const reqJson = await req.text()
      this.setState({
        cssValue: reqJson
      })
    } catch(e) {
      console.log(e);
    }
  }

  handleTabSwitcher(tab) {
    this.setState({
      activeButton: tab
    })

    switch(tab) {
      case 'scss':
        this.setState({
          tabActive: 'scss'
        })
        break
      case 'css':
        this.setState({
          tabActive: 'css'
        })
        break
      default:
    }
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
              <button id="editor-switcher_scss" onClick={() => this.handleTabSwitcher('scss')} className={`bg-white inline-block border-1 rounded-t py-2 px-4 hover:bg-pink-800 hover:text-white ${ this.state.activeButton === 'scss' && 'bg-pink-700 text-white font-semibold'}`}>SCSS</button>
            </li>
            <li className="mr-1">
              <button id="editor-switcher_css" onClick={() => this.handleTabSwitcher('css')} className={`bg-white inline-block border-1 rounded-t py-2 px-4 hover:bg-pink-800 hover:text-white ${ this.state.activeButton === 'css' && 'bg-pink-700 text-white font-semibold'}`}>CSS</button>
            </li>
            <li className="mr-1">
              <button id="editor-switcher_demo" onClick={() => this.handleTabSwitcher('demo')} className={`bg-white inline-block border-1 rounded-t py-2 px-4 hover:bg-pink-800 hover:text-white ${ this.state.activeButton === 'demo' && 'bg-pink-700 text-white font-semibold'}`}>DEMO</button>
            </li>
            <button onClick={this.fetchScss} className="convert-button text-white absolute right-0 mr-2 w-8 h-8">
              <i className="material-icons">play_arrow</i>
            </button>
          </ul>
        </div>
      </div>
      <div className="flex mb-4 relative">
        <div className={`w-1/2 xs:w-full mr-1 xs:mr-0 bg-gray-200 h-screen scss-wrapper ${ this.state.tabActive !== 'scss' && 'xs:hidden' }`}>
          <div className="flex px-3 py-1 justify-between bg-white">
            <div style={{ margin: 'auto 0' }}>
              <img src={sassSvg} style={{height: '24px'}} alt="Icon SCSS Compiler" />
            </div>
            <div>
              <button title="download" onClick={() => this.handleDownload('scss')}>
                <i className="material-icons">file_download</i>
              </button>
              <button title="copy" data-clipboard-target="#scss-editor" onClick={() => this.handleCopy('scss')}>
                <i className="material-icons">content_copy</i>
              </button>
              <button title="clear" onClick={() => this.handleClear('scss')}>
                <i className="material-icons">clear</i>
              </button>
              <button title="beautify scss" onClick={() => this.handleBeauty('scss')}>
                <i className="material-icons">format_paint</i>
              </button>
              <button title="fullscreen"onClick={() => this.handleFullscreen('scss')}>
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
            onChange={this.handleScssChange.bind(this)}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.state.scssValue}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
            />
        </div>
        <div className={`w-1/2 xs:w-full ml-1 xs:ml-0 bg-gray-900 h-screen css-wrapper ${ this.state.tabActive !== 'css' && 'xs:hidden' }`}>
          <div className="flex px-3 py-1 justify-between bg-white">
            <div style={{ margin: 'auto 0' }} className="flex items-center justify-between">
              <img src={cssSvg} style={{height: '24px'}} alt="" />
              <span className="pl-2">Result</span>
              <span className="ml-4 convert-loading hidden">
                <i className="fa fa-cog fa-spin"></i>
              </span>
            </div>
            <div>
              <button title="download" onClick={() => this.handleDownload('css')}>
                <i className="material-icons">file_download</i>
              </button>
              <button title="copy" onClick={() => this.handleCopy('css')}>
                <i className="material-icons">content_copy</i>
              </button>
              <button title="fullscreen" onClick={() => this.handleFullscreen('css')}>
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
            fontSize={14}
            readOnly={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.state.cssValue}
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
          <button onClick={this.handleConvert} className="convert-button text-white">
            <i className="material-icons">play_arrow</i>
          </button>
        </div>
      </div>
      </>
    )
  }
}
