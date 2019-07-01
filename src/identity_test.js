import {test} from "tape-modern"
import identity from './identity.js'

test('1 will equal 1', assert => {
    const result = identity(1)
    assert.equal(result, 1, '1 should 1')
})