import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';

import './PlanetsTable.css';

import getAllPlanets from '../../actions/getAllPlanets';
import getNextPage from '../../actions/getNextPage';
import getPrevPage from '../../actions/getPrevPage';

function Planets({ allPlanetsProps, getAllPlanets, getNextPage, getPrevPage }) {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllPlanets();
  }, []);

  let dataTypesArr;
  allPlanetsProps.values ? dataTypesArr = Object.values(allPlanetsProps.values[0]).map(value => typeof value) : dataTypesArr = '';

  const handlePrev = () => {
    if (allPlanetsProps.prev ) {
      setCurrentPage(currentPage - 1);
    }
    getPrevPage(currentPage);
  };

  const handleNext = () => {
    if (allPlanetsProps.next) {
      setCurrentPage(currentPage + 1);
    }
    getNextPage(currentPage);
  };
  return (
    <div className='grid-wrapper'>
      <table className='gridTable'>
        <thead>
          <tr>
            {allPlanetsProps.header.map((colName, i)=> <th key={colName}><p className='value'>{colName}</p><p className='type'>{dataTypesArr[i]}</p></th>)}
            <th><p className='value'>residents</p><p className='type'>{dataTypesArr[9]}</p></th>
            <th><p className='value'>films</p><p className='type'>{dataTypesArr[10]}</p></th>
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
      <button type='button' disabled={allPlanetsProps.prev ? 'disabled' : ''} className='navigation-btn' onClick={() => handlePrev()}>Prev</button>
      <button type='button' disabled={allPlanetsProps.next ? 'disabled' : ''} className='navigation-btn' onClick={() => handleNext()}>Next</button>
  </div>
  );
}

Planets.propTypes = {
  allPlanetsProps: PropTypes.object,
}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getAllPlanets, getNextPage, getPrevPage })(Planets);
