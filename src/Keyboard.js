import React from 'react';
import classnames from 'classnames';

const _keyMap = {
                                                  104:['ภ'],       105:['ถ'],     106:['ุ', 'ู'], 107:['ึ'],    108:['ค'],       109:['ต'],    110:['จ'],      111:['ข'],      112:['ช'],
                  202:['ไ'],       203:['ำ', 'ฎ'], 204:['พ', 'ฑ'], 205:['ะ', 'ธ'], 206:['ั'],     207:['ี', '๊'], 208:['ร', 'ณ'], 209:['น'],     210:['ย', 'ญ'], 211:['บ', 'ฐ'], 212:['ล'],
  301:['ฟ', 'ฤ'], 302:['ห', 'ฆ'], 303:['ก', 'ฏ'], 304:['ด', 'โ'], 305:['เ', 'ฌ'], 306:['้', '็'], 307:['่', '๋'], 308:['า', 'ษ'], 309:['ส', 'ศ'], 310:['ว', 'ซ'], 311:['ง'],
  401:['ผ'],      402:['ป'],      403:['แ', 'ฉ'], 404:['อ', 'ฮ'], 405:['ิ'],        406:['ื', '์'], 407:['ท'],  408:['ม', 'ฒ'], 409:['ใ', 'ฬ'], 410:['ฝ']
};
Object.keys(_keyMap).forEach((key) => {
  _keyMap[key] = {
    labels: _keyMap[key],
    color: 'white',
  };
});
export const keyMap = _keyMap;
const keys = [
  [               104, 105, 106, 107, 108, 109, 110, 111, 112],
  [     202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212],
  [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311],
  [401, 402, 403, 404, 405, 406, 407, 408, 409, 410],
];

function Keyboard({ attemptingHandler }) {
  // const flattenAnswer = answer.flat();
  // const flattenAttempt = attempts.flat(2);
  // const flattenAttemptContainAndflattenAnswerNot = (keyId) => flattenAttempt.includes(keyId) && !flattenAnswer.includes(keyId);
  // const flattenAttemptNotContain = (keyId) => !flattenAttempt.includes(keyId);
  // const flattenAttemptContainAndflattenAnswerContain = (keyId) => flattenAttempt.includes(keyId) && flattenAnswer.includes(keyId);
  // const flattenAttemptContainAndflattenAnswerContainAnd = (keyId) => {
  //   if (flattenAttemptContainAndflattenAnswerContain(keyId)) {
  //     for(let i = 0; i < answer.length; i++) {
  //       if (attempts.some((attemp) => attemp[i].includes(keyId) && answer[i].includes(keyId))) return true;
  //     };
  //   }
  //   return false;
  // };
  // 'btn-dark': flattenAttemptContainAndflattenAnswerNot(keyId),
  // 'btn-light': flattenAttemptNotContain(keyId),
  // 'btn-success': flattenAttemptContainAndflattenAnswerContainAnd(keyId),
  // 'btn-warning': flattenAttemptContainAndflattenAnswerContain(keyId),

  return (
    <div className="container">
      {keys.map((row, index) => (
        <div key={index} className="row justify-content-md-center">
          {row.map((keyId) => (
            <div key={keyId} className="col-md-auto">
              <button type="button"
                className={classnames({
                  'btn': true,
                  'btn-dark': keyMap[keyId].color === 'black',
                  'btn-light': keyMap[keyId].color === 'white',
                  'btn-success': keyMap[keyId].color === 'green',
                  'btn-warning': keyMap[keyId].color === 'yellow',
                })}
                onClick={() => attemptingHandler(keyId)}
              >
                <div>{keyMap[keyId].labels[1] || ' '}</div>
                <div>{keyMap[keyId].labels[0]}</div>
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
