import {test} from 'tape-modern';

import equals from './equals';

test('equals function', assert => {
  assert.equal(equals(1, 1), true, '1 === 1 is true');
});

test('equals test 2', assert => {
  const result = equals('hello', 'hello');
  assert.equal(result, true, 'strings equal strings');
});
