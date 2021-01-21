import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import getPlanetResidents from '../../actions/getPlanetResidents';

import './PlanetResidentstable.css';

function PlanetResidentsTable({ location, allPlanetsProps, getPlanetResidents}) {

  const id = location.pathname.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);

  useEffect(() => {
    getPlanetResidents(id[0]);
  }, []);

  return (
    <div>
      {allPlanetsProps.planetResidents ?
      <React.Fragment>
        <h3>{allPlanetsProps.planetResidents[0]}</h3>
        {allPlanetsProps.planetResidents[1].map((resident, index) => (
          <p key={index}>{resident}</p>
        ))}
      </React.Fragment>
      : <p>Loading</p>}
    </div>
  );
}

PlanetResidentsTable.propTypes = {

}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getPlanetResidents })(PlanetResidentsTable);
