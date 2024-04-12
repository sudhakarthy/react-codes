import './App.css';
import React, { useState, useReducer, useMemo } from 'react';

// Testing of ScriptMode use for REACT sideeffects
function App() {
  console.log('Inside App');
  const [count, setCount] = useState(0);
  const reducer = (state, action) => {
    if (action === 'INCREMENT') { return { ...state, count: state.count + 1 }; } else if (action === 'DECREMENT') { return { ...state, count: state.count - 1 }; } else if (action === 'TOGGLE') { return { ...state, isAdmin: !state.isAdmin }; } else { return { ...state }; }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, isAdmin: false });
  const doubleCount = useMemo(() => { console.log('Inside Memo'); return count * 2; }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        State : <button onClick={() => { setCount(c => { console.log('button onclick'); return c + 1; }); }}>
          {count} * 2 = {count * 2}</button>
        <br />
        <br></br>
        Reducer:
        <button onClick={() => dispatch('INCREMENT')}>{state.count}</button>
        Is Admin:
        <button onClick={() => dispatch('TOGGLE')}>{state.isAdmin.toString()}</button>
      </header>
    </div >
  );
}

export default App;
