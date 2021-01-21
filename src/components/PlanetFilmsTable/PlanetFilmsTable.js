import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';

import './PlanetFilmsTable.css';

import getPlanetFilms from '../../actions/getPlanetFilms';

function PlanetFilmsTable({ location, allPlanetsProps, getPlanetFilms}) {

  const id = location.pathname.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);

  useEffect(() => {
    getPlanetFilms(id[0]);
  }, []);

  return (
    <div>
      {allPlanetsProps.planetFilms ?
        <React.Fragment>
        <h3>{allPlanetsProps.planetFilms[0]} Films:</h3>
        {allPlanetsProps.planetFilms[1].map((film, index) => (
          <p key={index}>{film}</p>
        ))}
      </React.Fragment>
      : <p>Loading</p>}
    </div>
  );
}

PlanetFilmsTable.propTypes = {

}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getPlanetFilms })(PlanetFilmsTable);
