import React from 'react';
import classnames from 'classnames';
import { keyMap } from './Keyboard';

// attempt =  [ [305], [302], [408, 406], [404], [209] ];
function Attempt({ attempt }) {
  return (
    <div className="row justify-content-md-center">
      {attempt.map((ids, index) => (
        <div key={index} className="col-md-auto">
          {ids.map((keyId, index) => (
            <div key={index} className={classnames({
              'bg-dark text-white': keyMap[keyId].color === 'black',
              'bg-light text-dark': keyMap[keyId].color === 'white',
              'bg-success text-white': keyMap[keyId].color === 'green',
              'bg-warning text-dark': keyMap[keyId].color === 'yellow',
            })}>
              <div>{keyMap[keyId].labels[1] || ' '}</div>
              <div>{keyMap[keyId].labels[0]}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Attempt;
