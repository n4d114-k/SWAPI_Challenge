import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import './PlanetFilmsTable.css';

function PlanetFilmsTable({ location }) {

  const id = location.pathname.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);

  const [planetName, setPlanetName] = useState([]);
  const [planetFilmsLinks, setPlanetFilmsLinks] = useState([]);
  const [planetFilms, setPlanetFilms] = useState([]);

  const films = [];

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`).then(data => {
      const name = data.data.name;
      const filmsLinks = data.data.films;
      setPlanetFilmsLinks(filmsLinks);
      setPlanetName(name);
    })
    .then(planetFilmsLinks.map((link, index) => {
      axios.get(link).then(filmData => {
        films.push(filmData.data.title);
        setPlanetFilms(films);
      });
    }));
  }, []);

  return (
    <div>
      <h3>{planetName} Films:</h3>
      {planetFilmsLinks.map((film, index) => (
        <p key={index}>{film}</p>
      ))}
    </div>
  );
}

PlanetFilmsTable.propTypes = {

}

export default PlanetFilmsTable;
