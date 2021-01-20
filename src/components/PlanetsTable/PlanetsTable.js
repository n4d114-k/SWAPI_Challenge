import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './PlanetsTable.css';

import getAllPlanets from '../../actions/getAllPlanets';

function Planets({allPlanetsProps, getAllPlanets}) {

  useEffect(() => {
    getAllPlanets();
  }, []);

  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {allPlanetsProps.header.map(colName => <th key={colName}>{colName}</th>)}
          {!!allPlanetsProps.actions.length && <th>Actions</th>}
        </tr>
      </thead>

    </table>

  );
}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getAllPlanets })(Planets);
