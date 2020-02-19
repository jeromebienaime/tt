import test from "tape"
import { InvalidArgumentError } from "restify";
import generatePassword from "password-generator"

import Password from "./Password"

test("Password should have a property called password", t => {
    const pass = "moultipass";
    const o  = new Password();
    o.value = pass;

    t.true(o.getValue().length > 0, "prop password has been assigned via setter");
    t.end();
})

test("prop password must not be too short", t => {
    const o  = new Password();
    o.value = "au";

    t.throws( 
        () => new InvalidArgumentError("Password must be at least 8 characters long"),  
    "throws an error if prop name is less than 8 characters long");
    t.end();

})

test("prop password cannot be too long", t => {
    const o =  new Password();
    o.value = generatePassword(257)

    t.throws(
        () => new InvalidArgumentError("Password must not exceeds 255 characters long"), 
        "throws an error if prop password is more than 255 characters long")
    t.end()
})

test("prop password must be properly hashed", t => {
    const o  = new Password();
    const pass = generatePassword(10);
    o.value = pass
    
    t.plan(2)
    t.notEqual(pass, o.getValue(), "prop password is hashed")
    t.true(o.check(pass), "hashed password can be verified against raw password")
    t.end()
})