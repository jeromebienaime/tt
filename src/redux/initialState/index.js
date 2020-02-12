import chance from "chance"
export default {
    value: 0,
    enabled: false,
    timeout: 1000,
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
