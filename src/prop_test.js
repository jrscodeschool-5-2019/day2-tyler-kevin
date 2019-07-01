import {test} from "tape-modern"
import prop from './prop'

test('name, user should equal Fred', assert => {
    const user = {name: "Fred"}
    const result = prop("name", user)
    assert.equal(result, "Fred", 'name, user should equal Fred')
})