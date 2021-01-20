import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route }  from 'react-router-dom';

import store from './store.js';

import Navbar from './components/Navbar/Navbar';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';
import PlanetFilmsTable from './components/PlanetFilmsTable/PlanetFilmsTable';
import PlanetResidentsTable from './components/PlanetResidentsTable/PlanetResidentsTable';

function App() {
  return (
    <Provider className="app" store={store}>
      <BrowserRouter>
        <Navbar />
        <br />
        <Route path='/' exact component={PlanetsTable} />
        <Route path='/planet/:id' component={PlanetInfo} />
        <Route path='/film/:id' component={PlanetFilmsTable} />
        <Route path='/resident/:id' component={PlanetResidentsTable} />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
