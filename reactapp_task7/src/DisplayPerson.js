import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayPerson extends Component {


  render() {
      const { name, age, job, salary} = this.props

      return (
          <>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
              <p>Job: {job}</p>
              <p>Salary: {salary}</p>
          </>
      )
  }
}
  Component.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    job: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}


export default DisplayPerson;