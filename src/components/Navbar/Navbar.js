import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import './Navbar.css';

import FormModal from '../FormModal/FormModal';

function Navbar() {
  return (
    <nav>
      <Link to='/' ><h1>Star Wars Planets</h1></Link>
      <FormModal />
    </nav>
  );
}

Navbar.propTypes = {

}


export default Navbar;
