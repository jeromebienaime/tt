import timer from "./timer"
import test from "ava"
import jsen from "jsen"

test("timer schema should be correct when values provided are correct", t => {
    //
    const result = jsen(timer)

    const correctValues = { value: 0, enabled: false, timeout: 1000 }

    t.true(result(correctValues))
})
test("default values of timer schema should still build a valid schema", t => {
    const result = jsen(timer)

    const correctValues = { value: 0, enabled: false, timeout: 1000 }

    t.deepEqual(result.build(), correctValues)
})
