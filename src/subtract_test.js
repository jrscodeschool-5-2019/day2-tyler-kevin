import {test} from 'tape-modern';
import subtract from './subtract';

test('2 - 1 should equal 1', assert => {
  const result = subtract(2, 1);
  assert.equal(result, 1, '2 - 1 should be 1');
});
