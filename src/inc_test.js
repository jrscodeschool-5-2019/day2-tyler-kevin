import {test} from 'tape-modern';
import inc from './inc';

test('1 inc will equal 2', assert => {
  const result = inc(1);
  assert.equal(result, 2, '1 inc will should be 2' );
});
