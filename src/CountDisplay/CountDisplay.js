import React from 'react';
import { connect } from 'react-redux';

const CountDisplay = (props) => {
  return (
    <div>
      <p>Count: {props.count}</p>
      <p>Test: {props.testCount}</p>
      {console.log(props)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count.count, testCount: state.count.testCount };
};

export default connect(mapStateToProps)(CountDisplay);
