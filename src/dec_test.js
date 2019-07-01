import {test} from 'tape-modern';
import dec from './dec';

test('1 dec will equal 0', assert => {
  const result = dec(1);
  assert.equal(result, 0, '1 dec should be 0');
});
