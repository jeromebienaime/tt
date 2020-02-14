export default {
    type: "object",
    items: {
        type: "array",
        items: {
            required: ["id", "label", "editing"],
            id: { type: "string", format: "^[0-9]{4}" },
            label: { type: "string", minLength: 2, maxLength: 200 },
            editing: { type: "boolean", default: false }
        }
    },
    current: {
        type: "object",
        default: {}
    },
    running: { type: "boolean", default: "false" },
    finished: { type: "boolean", default: "false" },
    history: {
        type: "array",
        default: []
    }
}
