import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';

import getAllPlanets from '../../actions/getAllPlanets';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({ allPlanetsProps, getAllPlanets}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Add Planet Form</h2>
      <form id='simple-modal-description' onSubmit={(e) => formSubmit(e)}>
        {allPlanetsProps.header.map((name, index) =>
          <React.Fragment key={index}>
            <label htmlFor={name}>Enter the {name}:</label>
            <input type='text' id={name} /><br />
          </React.Fragment>
        )}
        <input type='submit' value='Submit'/>
      </form>
    </div>
  );

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        Add Planet
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  allPlanetsProps: state.allPlanetsState
});

export default connect(mapStateToProps, { getAllPlanets })(SimpleModal);
