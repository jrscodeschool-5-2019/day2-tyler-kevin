import {test} from 'tape-modern';
import add from './add';

// string = describe the test:
test('1 + 1 should equal 2', assert => {
  const result = add(1, 1);
  assert.equal(result, 2, '1 + 1 should be 2');
});
