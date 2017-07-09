import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const AboutName = props => (
  <div className='App'>
    <h2>{props.match.params.account}</h2>
    <h2>{JSON.stringify(props)}</h2>
  </div>
);

AboutName.defaultProps = {
  match: {}
};
AboutName.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      account: PropTypes.string.isRequired
    }).isRequired
  })
};
export default AboutName;
