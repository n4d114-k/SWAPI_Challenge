import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './PlanetsTable.css';

import getAllPlanets from '../../actions/getAllPlanets';

function Planets({ allPlanetsProps, getAllPlanets}) {

  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    getAllPlanets();
  }, []);

  return (
    <div className='grid-wrapper'>
      <table className='gridTable'>
        <thead>
          <tr>
            {allPlanetsProps.header.map(colName => <th key={colName}>{colName}</th>)}
            <th>residents</th>
            <th>films</th>
          </tr>
        </thead>
        <tbody>
          {allPlanetsProps.values ? allPlanetsProps.values.map((row, index) => (
            <tr key={index} id={row.name}>
              {allPlanetsProps.header.map((colName) => <td key={colName}><Link to={`/planet/${index+1}`}>{row[colName]}</Link></td>)}
                <td>
                  { row.residents.length > 0 ? <Link className='btn' to={`/planet/${index+1}/residents`} >{row.residents.length}</Link> : ''}
                </td>
                <td>
                  { row.films.length > 0 ? <Link className='btn' to={`/planet/${index+1}/films`} >{row.films.length}</Link>: ''}
                </td>
            </tr>
          )) : <tr><td>Loading</td></tr> }
        </tbody>
      </table>
  </div>
  );
}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getAllPlanets })(Planets);
