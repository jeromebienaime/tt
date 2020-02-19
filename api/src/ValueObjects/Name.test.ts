import  test from "tape";
import Name from "./Name";
import { InvalidArgumentError } from "restify";
import generatePassword from "password-generator"


test("Name should have a prop called name", t => {
    const o = new Name();
    o.value = "name"

    t.equal(o.getValue(), "name", "prop name can be assigned via the setter")
    t.end()
})

test("prop name cannot be empty", t => {
    const o = new Name();
    o.value = "";

    t.throws(
        () =>  new InvalidArgumentError("Name cannot be empty"), "throws an error if prop name is empty");
    t.end()
})

test("prop name cannot be too short", t => {
    const o = new Name();
    o.value = "q";

    t.throws(
        () => new InvalidArgumentError("Name have to be at least 2 characters long"), 
        "throws an error if prop name is less than 2 characters long")
    t.end()
})

test("prop name cannot be too long", t => {
    const o =  new Name();
    o.value = generatePassword(257)

    t.throws(
        () => new InvalidArgumentError("Name cannot exceeds 255 characters long"), 
        "throws an error if prop name is more than 255 characters long")
    t.end()
})