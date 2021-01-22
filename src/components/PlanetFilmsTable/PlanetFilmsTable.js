import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import './PlanetFilmsTable.css';

import getPlanetFilms from '../../actions/getPlanetFilms';

function PlanetFilmsTable({ planetFilms, getPlanetFilms}) {

  const params = useParams();

  useEffect(() => {
    getPlanetFilms(params.id);
  }, []);

  return (
    <div>
      {planetFilms ?
        <React.Fragment>
        <h3>{planetFilms.filmName} Films:</h3>
        {planetFilms.films.map((film) => (
          <p key={film.url}>{film.title}</p>
        ))}
      </React.Fragment>
      : <p>Loading</p>}
    </div>
  );
}

PlanetFilmsTable.propTypes = {

}

const mapStateToProps = state => ({
  planetFilms: state.allPlanetsState.planetFilms
});

export default connect(mapStateToProps, { getPlanetFilms })(PlanetFilmsTable);
