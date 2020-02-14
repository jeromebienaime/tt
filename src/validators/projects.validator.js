import chance from "chance"
export default {
    default: {},
    type: "object",
    required: ["items"],
    properties: {
        items: {
            default: [{
                id: chance().ssn(),
                createdAt: new Date()
            }],
            type: "array",
            items: {
                required: ["id", "createdAt"],
                id: { type: "string", format: "^[0-9]{3}-[0-9]{2}-[0-9]{4}$" },
                createdAt: { format: "date-time" },
                name: { type: "string", minLength: 2, maxLength: 200 },
                description: { type: "string" },
                budget: {
                    type: "object",
                    required: ["type"],
                    // eslint-disable-next-line quote-props, no-dupe-keys
                    "type": { enum: ["DIVIDED_MONTH", "DIVIDED_GLOBAL", "MONTH", "GLOBAL"] },
                    ratePerHour: { type: "number", minimum: 0, default: 50 },
                    taxes: { type: "number", default: 20.6 }
                },
                duration: {
                    history: {
                        required: ["from", "to", "total"],
                        from: { format: "[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}" },
                        to: { format: "[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}" },
                        total: { format: "^P" }
                    }
                }
            }
        }
    }

}
