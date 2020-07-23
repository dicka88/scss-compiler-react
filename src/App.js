import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import home from './pages/home'
import page1 from './pages/page1'
import page2 from './pages/page2'

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
      			<Route path="/page1" component={page1} />
      			<Route path="/page2" component={page2} />
      		</Switch>
      	</main>
      	<Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
