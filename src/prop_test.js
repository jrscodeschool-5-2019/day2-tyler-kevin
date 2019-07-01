import {test} from "tape-modern"
import prop from './prop'

test('name, user should equal Fred', assert => {
    const user = {name: "Fred"}
    const result = prop("name", user)
    assert.equal(result, "Fred", 'name, user should equal Fred')
})

test('phone, user should equal null', assert => {
    const user = {name: "Fred"}
    const result = prop("phone", user)
    assert.equal(result, null, 'phone, user should equal null')
})