import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import './PlanetInfo.css';

import getPlanetInfo from '../../actions/getPlanetInfo';

function PlanetInfo({ location, allPlanetsProps, getPlanetInfo}) {

  const id = location.pathname.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);

  useEffect(() => {
    getPlanetInfo(id[0]);
  }, []);

  return (
    <div>
      {allPlanetsProps.selectedPlanet ?
        <React.Fragment>
        <div><b>Name:</b> {allPlanetsProps.selectedPlanet.name}</div>
        <div><b>Rotation Period:</b> {allPlanetsProps.selectedPlanet.rotation_period}</div>
        <div><b>Orbital Period:</b> {allPlanetsProps.selectedPlanet.orbital_period}</div>
        <div><b>DiameterL:</b>{allPlanetsProps.selectedPlanet.diameter}</div>
        <div><b>Climate:</b> {allPlanetsProps.selectedPlanet.climate}</div>
        <div><b>Gravity:</b> {allPlanetsProps.selectedPlanet.gravity}</div>
        <div><b>Terrain:</b> {allPlanetsProps.selectedPlanet.terrain}</div>
        <div><b>Surface Water:</b> {allPlanetsProps.selectedPlanet.surface_water}</div>
        <div><b>Population:</b> {allPlanetsProps.selectedPlanet.population}</div>
        <div><Link to={`/planet/:${id}/films`} >Films</Link></div>
        <div><Link to={`/planet/:${id}/residents`} >Residents</Link></div>
        </React.Fragment>
        : <p>Loading</p>}
    </div>
  );
}

PlanetInfo.propTypes = {

}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getPlanetInfo })(PlanetInfo);
