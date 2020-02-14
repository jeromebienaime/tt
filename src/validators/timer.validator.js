export default {
    default: {},
    type: "object",
    properties: {
        default: {},
        type: "object",
        required: ["value", "enabled", "timeout"],
        value: { type: "number", minimum: 0, default: 0 },
        enabled: { type: "boolean", default: false },
        timeout: { type: "number", minimum: 0, default: 1000 }
    }
}
