import projects from "./projects.validator"
import test from "ava"
import jsen from "jsen"
import chance from "chance"

test("projects schema should be correct when values provided are correct", t => {
    const result = jsen(projects)

    const correctValues = {
        items: [
            {
                id: chance().ssn(),
                name: "Projet de test",
                createdAt: new Date(),
                budget: {
                    type: "DIVIDED_MONTH",
                    ratePerHour: 50,
                    taxes: 20.6
                },
                duration: {
                    history: [
                        {
                            from: "2020-01-01 00:00:00",
                            to: "2020-01-31 00:00:00",
                            total: "P3H30"
                        }
                    ]
                },
                description: ""
            }
        ]
    }

    t.true(result(correctValues))
})

test("default values of projects schema should still build a valid schema", t => {
    const result = jsen(projects)

    t.true(result.build().items[0].id.length > 0)
    t.true(result.build().items[0].createdAt.toString().length > 0)
})
