import validate from "./"
import test from "ava"
import initialState from "../redux/initialState/index"

test("index should validate the whole state", t => {
    t.true(validate(initialState))
})
