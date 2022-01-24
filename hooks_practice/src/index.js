import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import State from './pages/state/State'
// import Effect from './pages/effect/Effect'
// import Memo from './pages/memo/Memo'
// import Ref from './pages/ref/Ref'
import Context from './pages/context/Context'

ReactDOM.render(
  <React.StrictMode>
    {/* <State /> */}
    {/* <Effect /> */}
    {/* <Memo /> */}
    {/* <Ref /> */}
    <Context />
  </React.StrictMode>,
  document.getElementById('root')
);
