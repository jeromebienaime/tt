import chance from "chance"
import createPassword from "../services/password.create"

export default {
    type: "object",
    default: {},
    properties: {
        required: ["init", "loading", "items"],
        default: {
            init: false,
            loading: false
        },
        init: { type: "boolean" },
        loading: { type: "boolean" },
        items: {
            default: [{
                id: chance().ssn()
            }],
            type: "array",
            items: {
                required: ["userName"],
                properties: {
                    id: { default: chance().ssn() },
                    createdAt: { default: new Date() },
                    password: { default: createPassword() },
                    userName: { type: "string", minLength: 2, maxLength: 200 },
                    companyName: { type: "string", minLength: 1, maxLength: 200 },
                    contact: {
                        type: "object",
                        firstName: { type: "string", minLength: 1, maxLength: 200 },
                        lastName: { type: "string", minLength: 2, maxLength: 200 },
                        gender: { enum: ["M", "F", "ND"] }
                    },
                    URL: { format: "uri" }
                }

            }
        }
    }
}
