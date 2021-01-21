import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import propTypes from 'prop-types';

import './PlanetInfo.css';

function PlanetInfo({ location }) {

  const id = location.pathname.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);

  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`).then(data => {
      const planet = data.data;
      setPlanet(planet);
    });
  }, []);

  return (
    <div>
      <div><b>Name:</b> {planet.name}</div>
      <div><b>Rotation Period:</b> {planet.rotation_period}</div>
      <div><b>Orbital Period:</b> {planet.orbital_period}</div>
      <div><b>DiameterL:</b>{planet.diameter}</div>
      <div><b>Climate:</b> {planet.climate}</div>
      <div><b>Gravity:</b> {planet.gravity}</div>
      <div><b>Terrain:</b> {planet.terrain}</div>
      <div><b>Surface Water:</b> {planet.surface_water}</div>
      <div><b>Population:</b> {planet.population}</div>
      <div><Link to={`/planet/:${id}/films`} >Films</Link></div>
      <div><Link to={`/planet/:${id}/residents`} >Residents</Link></div>
    </div>
  );
}

PlanetInfo.propTypes = {

}


export default PlanetInfo;
