import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import home from './pages/home'
import sasscss from './pages/sasscss'
import cssscss from './pages/cssscss'

import Header from './component/header'
import Footer from './component/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      	<Header />
      	<main>
      		<Switch>
      			<Route path="/" component={home} exact />
      			<Route path="/sass-css" component={sasscss} />
      			<Route path="/css-scss" component={cssscss} />
      		</Switch>
      	</main>
      	<Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
