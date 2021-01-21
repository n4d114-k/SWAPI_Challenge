import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios'
import { connect } from 'react-redux';

import './PlanetsTable.css';

import getAllPlanets from '../../actions/getAllPlanets';

function Planets({ allPlanetsProps, getAllPlanets}) {

  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    getAllPlanets();
    axios.get('https://swapi.dev/api/planets').then(data => {
      const planets = data.data.results;
      setAllPlanets([...planets]);
    });
  }, []);

  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {allPlanetsProps.header.map(colName => <th key={colName}>{colName}</th>)}
          <th>residents</th>
          <th>films</th>
        </tr>
      </thead>
      <tbody>
        {allPlanets.map((row, index) => (
          <tr key={index} id={row.name}>
            {allPlanetsProps.header.map((colName) => <td key={colName}><Link to={`/planet/:${index+1}`}>{row[colName]}</Link></td>)}
              <td>
                { row.residents.length > 0 ? <Link className='btn' to={`/planet/:${index+1}/residents`} >{row.residents.length}</Link> : ''}
              </td>
              <td>
                { row.films.length > 0 ? <Link className='btn' to={`/planet/:${index+1}/films`} >{row.films.length}</Link>: ''}
              </td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getAllPlanets })(Planets);
