import React from 'react';
import { connect } from 'react-redux';

const CountDisplay = (props) => {
  return <p>Test: {props.count}</p>;
};

const mapStateToProps = (state) => {
  return { count: state.count.count };
};

export default connect(mapStateToProps)(CountDisplay);
