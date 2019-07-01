import {test} from "tape-modern"
import multiply from './multiply'

test('2 * 2 should equal 4', assert => {
    const result = multiply(2, 2) 
    assert.equal(result, 4,"2 * 2 should be 4")
})