import React from 'react';
import propTypes from 'prop-types';

import './Navbar.css';

import FormModal from '../FormModal/FormModal';

function Navbar() {
  return (
    <nav>
      <h1>Star Wars Planets</h1>
      <button>Add Planet</button>
    </nav>
  );
}

Navbar.propTypes = {

}


export default Navbar;
