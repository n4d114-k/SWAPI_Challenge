import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import getPlanetResidents from '../../actions/getPlanetResidents';

import './PlanetResidentstable.css';

function PlanetResidentsTable({allPlanetsProps, getPlanetResidents}) {

  useEffect(() => {
    getPlanetResidents();
  }, []);

  return (
    <React.Fragment>

    </React.Fragment>
  );
}

PlanetResidentsTable.propTypes = {

}


const mapStateToProps = state => ({
  PlanetResidentsProps: state.PlanetResident
});

export default connect(mapStateToProps, { getPlanetResidents })(PlanetResidentsTable);
