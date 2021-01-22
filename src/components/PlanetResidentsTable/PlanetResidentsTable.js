import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import getPlanetResidents from '../../actions/getPlanetResidents';

import './PlanetResidentstable.css';

function PlanetResidentsTable({ planetResidents, getPlanetResidents}) {

  const params = useParams();

  useEffect(() => {
    getPlanetResidents(params.id);
  }, []);

  return (
    <div>
      {planetResidents ?
      <React.Fragment>
        <h3>{planetResidents.filmName} Residents:</h3>
        {planetResidents.residents.map((resident) => (
          <p key={resident.url}>{resident.name}</p>
        ))}
      </React.Fragment>
      : <p>Loading</p>}
    </div>
  );
}

PlanetResidentsTable.propTypes = {

}

const mapStateToProps = state => ({
  planetResidents: state.allPlanetsState.planetResidents
});

export default connect(mapStateToProps, { getPlanetResidents })(PlanetResidentsTable);
