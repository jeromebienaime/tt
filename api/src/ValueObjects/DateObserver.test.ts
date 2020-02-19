import test from "tape"
import { InvalidArgumentError } from "restify";
import DateObserver from "./DateObserver"

test("DateObserver should have a prop called dateObserver", t => {
    const o = new DateObserver()
    o.value = "2020/02/19 14:40:25"

    t.ok(o.getValue(), "prop dateObserver can be assigned via the setter");
    t.end();
})

test("prop dateObserver must be defined", t => {
    const o = new DateObserver();
    
    t.throws(() => new InvalidArgumentError("DateObserver cannot be null"),
    "throws an error if prop is not set")
    t.end()
})

test("prop dateObserver must be younger than 2019", t => {
    const o = new DateObserver()
    o.value = "1950/12/24";

    t.throws(() => new InvalidArgumentError("DateObserver cannot be set before year 2020"),
    "throws an error if prop is older than 2020")
    t.end()
})