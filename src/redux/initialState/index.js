import chance from "chance"
export default {
    value: 0,
    todos:
    {
        items:
            [
                {
                    id: chance().ssn({ ssnFour: true, dashes: false }),
                    label: "todo"
                }, {
                    id: chance().ssn({ ssnFour: true, dashes: false}),
                    label: "todoA"
                }

            ],
        current: {},
        running: false, finished: false
    }
}