import {test} from 'tape-modern';
import inc from './inc';

test('number plus add function adds 1 to number', assert => {
  const result = inc(1);
  assert.equal(result);
});
