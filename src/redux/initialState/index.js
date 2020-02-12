import chance from "chance"
import password from "password-generator"

const createPassword = () => password(10, false, null, "bc-")

export default {
    timer: {
        value: 0,
        enabled: false,
        timeout: 1000
    },
    projects: {
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
    },
    clients: {
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
            },
            {
                id: chance().ssn(),
                companyName: "client B",
                contact: {
                    firstName: "Jean-Louis",
                    lastName: "COSTES",
                    gender: "M"
                },
                userName: "JLCostes",
                URL: "jeanlouiscostes.fr",
                password: createPassword(),
                createdAt: new Date()
            },
            {
                id: chance().ssn(),
                companyName: "10strict Tonneins",
                contact: {
                    firstName: "Fabienne",
                    lastName: "EUCHER",
                    gender: "F"
                },
                userName: "10strict",
                password: createPassword(),
                createdAt: new Date()
            }
        ],
        history: []
    },
    todos:
    {
        items:
            [
                {
                    id: chance().ssn({ ssnFour: true, dashes: false }),
                    label: "todo",
                    editing: false
                }, {
                    id: chance().ssn({ ssnFour: true, dashes: false }),
                    label: "todoA",
                    editing: false
                }, {
                    id: chance().ssn({ ssnFour: true, dashes: false }),
                    label: "todoB",
                    editing: false
                }

            ],
        current: {},
        running: false,
        finished: false,
        history: []
    }
}
