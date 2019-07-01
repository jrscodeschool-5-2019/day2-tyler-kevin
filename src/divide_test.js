import {test} from 'tape-modern';
import divide from './divide';

test('4 divided by 2 should equal 2', assert => {
  const result = divide(4, 2);
  assert.equal(result, 2, '4 divided by 2 should be 2');
});
