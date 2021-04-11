import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, changeCountTo } from '../actions';

const Count = (props) => {
  const [changeCount, setChangeCount] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    if (!value) {
      setChangeCount(0);
    } else {
      value[0] === 0 ? setChangeCount(parseInt(value.slice(0, 1))) : setChangeCount(parseInt(value, 0));
    }
  };

  const handleSubmit = () => {
    props.changeCountTo(changeCount);
    setChangeCount(0);
  };

  return (
    <div>
      <div className='Counter'>
        <p>Current Count: {props.count}</p>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
        <button onClick={props.reset}> Reset</button>
      </div>
      <div className='Counter_Input'>
        <input type='number' value={changeCount.toString()} onChange={(e) => handleChange(e)} />
        <button onClick={handleSubmit}>Change Count</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count.count };
};

export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
  changeCountTo,
})(Count);
