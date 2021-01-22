import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { useParams } from 'react-router-dom';

import getPlanetResidents from '../../actions/getPlanetResidents';

import './PlanetResidentstable.css';

function PlanetResidentsTable({ planetResidents, getPlanetResidents}) {

  const params = useParams();

  useEffect(() => {
    getPlanetResidents(params.id);
  }, []);

  return (
    <div className='info-wrapper'>
      {planetResidents ?
      <div className='info'>
        <h3 className='planet-name'>{planetResidents.filmName} Residents:</h3>
        {planetResidents.residents.map((resident) => (
          <p key={resident.url}>{resident.name}</p>
        ))}
      </div>
      : <p>Loading</p>}
    </div>
  );
}

PlanetResidentsTable.propTypes = {
  planetResidents: PropTypes.object,
}

const mapStateToProps = state => ({
  planetResidents: state.allPlanetsState.planetResidents
});

export default connect(mapStateToProps, { getPlanetResidents })(PlanetResidentsTable);
