import clients from "./clients"
import test from "ava"
import jsen from "jsen"
import chance from "chance"
import createPassword from "../services/password.create"

test("clients schema should be correct when values provided are correct", t => {
    const result = jsen(clients)

    const correctValues = {
        init: false,
        loading: false,
        items: [
            {
                id: chance().ssn(),
                companyName: "client A",
                contact: {
                    firstName: "Catherine",
                    lastName: "RIGOLE",
                    gender: "F"
                },
                userName: "CRigole",
                URL: "http://convergence-evolution.com",
                password: createPassword(),
                createdAt: new Date()
            }
        ]
    }

    t.true(result(correctValues))
})

test("clients schema should be correct when values provided are the minimun", t => {
    const payload = { items: [{ userName: "CRigole " }] }

    const result = jsen(clients, { greedy: true })
    t.true(result(payload))
})

test("default values of clients schema should still build a valid schema", t => {
    const validate = jsen(clients).build()
    const result = { ...validate, items: [{ ...validate.items[0], userName: "CRigole" }] }

    t.true(result.items[0].id.length > 0)
    t.true(result.items[0].createdAt.toString().length > 0)
    t.true(result.items[0].userName.length > 0)
    t.true(result.items[0].password.length > 0)
})
