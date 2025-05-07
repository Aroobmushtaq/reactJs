import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,   } from '../../reduxToolKIt/store/slices/counter.slice';

function Counter() {
    const count = useSelector((state) => state.counterSlice.count);
    const dispatch = useDispatch();
  
    return (
      <div className="App">
        <h1>Redux Toolkit Counter</h1>
        <h2>Count: {count}</h2>
  
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    );
  }
  

export default Counter


