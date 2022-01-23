import React from 'react';
import Attempt from './Attempt';

// attempts = [
//   [ [305], [302], [408, 406], [404], [209] ],
// ]
function AttemptList({ attempts }) {
  if (attempts.length === 0) return null;

  return (
    <>
      {attempts.map((attempt, index) => (
        <div key={index} className="container">
          <Attempt attempt={attempt} />
        </div>
      ))}
    </>
  );
}

export default AttemptList;
