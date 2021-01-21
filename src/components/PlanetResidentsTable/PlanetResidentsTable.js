import React, { useState, useEffect } from 'react';
import axios from 'axios'
import propTypes from 'prop-types';

import getPlanetResidents from '../../actions/getPlanetResidents';

import './PlanetResidentstable.css';

function PlanetResidentsTable({ location }) {

  const id = location.pathname.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);

  const [planetResidents, setPlanetResidents] = useState([]);
  const [planetName, setPlanetName] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`).then(data => {
      const name = data.data.name;
      const residents = data.data.residents;
      setPlanetResidents(residents);
      setPlanetName(name);
    });
  }, []);

  return (
    <div>
      <h3>{planetName} Residents:</h3>
      {planetResidents.map((resident, index) => (
        <p key={index}>{resident}</p>
      ))}
    </div>
  );
}

PlanetResidentsTable.propTypes = {

}


export default PlanetResidentsTable;
