import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './PlanetsTable.css';
import getAllPlanets from '../../actions/getAllPlanets';
import getAnotherPage from '../../actions/getAnotherPage';

function Planets({ allPlanetsProps, getAllPlanets, getAnotherPage }) {

  useEffect(() => {
    getAllPlanets(allPlanetsProps.page);
  }, []);

  let dataTypesArr;
  allPlanetsProps.values ? dataTypesArr = Object.values(allPlanetsProps.values[0]).map(value => typeof value) : dataTypesArr = '';

  const handlePrev = () => {
    getAnotherPage('decrease');
    getAllPlanets(allPlanetsProps.page);
  };

  const handleNext = () => {
    getAnotherPage('increase');
    getAllPlanets(allPlanetsProps.page);
  };
  return (
    <div className='grid-wrapper'>
      <table className='gridTable'>
        <thead>
          <tr>
            {allPlanetsProps.header.map((colName, i)=> <th key={colName}><p className='value'>{colName}</p><p className='type'>{dataTypesArr[i]}</p></th>)}
          </tr>
        </thead>
        <tbody>
          {allPlanetsProps.values ? allPlanetsProps.values.map((row, index) => (
            <tr key={index} id={row.name}>
              {allPlanetsProps.header.map((colName) => <td key={colName}><Link to={`/planet/${index+1}`}>{row[colName]}</Link></td>)}
                <td>
                  { row.residents.length > 0 ? <Link className='btn' to={`/planet/${index+1}/residents`} >Go to Residents ({row.residents.length})</Link> : '0'}
                </td>
                <td>
                  { row.films.length > 0 ? <Link className='btn' to={`/planet/${index+1}/films`} >Go to Films ({row.films.length})</Link>: '0'}
                </td>
            </tr>
          )) : <tr><td>Loading</td></tr> }
        </tbody>
      </table>
      <button type='button' disabled={!allPlanetsProps.prev} className='navigation-btn' onClick={() => handlePrev()}>Prev</button>
      <button type='button' disabled={!allPlanetsProps.next} className='navigation-btn' onClick={() => handleNext()}>Next</button>
  </div>
  );
}

Planets.propTypes = {
  allPlanetsProps: PropTypes.object,
}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getAllPlanets, getAnotherPage })(Planets);
