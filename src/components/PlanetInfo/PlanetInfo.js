import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import getPlanetInfo from '../../actions/getPlanetInfo';

function PlanetInfo({ selectedPlanet, getPlanetInfo}) {

  const params = useParams();

  useEffect(() => {
    getPlanetInfo(params.id);
  }, []);

  return (
    <div className='info-wrapper'>
    <div className='info'>
      {selectedPlanet ?
        <React.Fragment>
        <div className='planet-name'><b>Planet Name:</b> {selectedPlanet.name}</div>
        <div><b>Rotation Period:</b> {selectedPlanet.rotation_period}</div>
        <div><b>Orbital Period:</b> {selectedPlanet.orbital_period}</div>
        <div><b>DiameterL:</b>{selectedPlanet.diameter}</div>
        <div><b>Climate:</b> {selectedPlanet.climate}</div>
        <div><b>Gravity:</b> {selectedPlanet.gravity}</div>
        <div><b>Terrain:</b> {selectedPlanet.terrain}</div>
        <div><b>Surface Water:</b> {selectedPlanet.surface_water}</div>
        <div><b>Population:</b> {selectedPlanet.population}</div>
        <div><Link to={`/planet/${params.id}/films`} >Films</Link></div>
        <div><Link to={`/planet/${params.id}/residents`} >Residents</Link></div>
        </React.Fragment>
        : <p>Loading</p>}
    </div>
  </div>
  );
}

PlanetInfo.propTypes = {
  selectedPlanet: PropTypes.object,
}

const mapStateToProps = state => ({
  selectedPlanet: state.allPlanetsState.selectedPlanet
});

export default connect(mapStateToProps, { getPlanetInfo })(PlanetInfo);
