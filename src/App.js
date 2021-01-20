import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route }  from 'react-router-dom';

import store from './store.js';

import Navbar from './components/Navbar/Navbar';
import Planets from './components/Planets/Planets';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';
import PlanetFilmsGrid from './components/PlanetFilmsGrid/PlanetFilmsGrid';
import PlanetResidentsGrid from './components/PlanetResidentsGrid/PlanetResidentsGrid';

function App() {
  return (
    <Provider className="app" store={store}>
      <BrowserRouter>
        <Navbar />
        <br />
        <Route path='/' exact component={Planets} />
        <Route path='/planet/:id' component={PlanetInfo} />
        <Route path='/film/:id' component={PlanetFilmsGrid} />
        <Route path='/resident/:id' component={PlanetResidentsGrid} />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
