/**
 * @file validators/todos.validator.js
 * @description Validates todos
 * @interface Array<ITodo>
 * @requires validators/todo.validator.js
 */

export default {
    type: "object",

    /**
     * @description List of items to do
     * @type Array<ITodo>
     */
    items: {
        type: "array",
        items: {
            required: ["id", "label", "editing"],
            id: { type: "string", format: "^[0-9]{4}" },
            label: { type: "string", minLength: 2, maxLength: 200 },
            editing: { type: "boolean", default: false }
        }
    },

    /**
     * @description Current item running
     * @default {}
     * @Type ITodo
     */
    current: {
        type: "object",
        default: {}
    },

    /**
     * @description is a task running?
     * @default false
     * @type Boolean
     */
    running: { type: "boolean", default: "false" },

    /**
     * @description is the list of items to do finished?
     * @default false
     * @type Boolean
     */
    finished: { type: "boolean", default: "false" },

    /**
     * @description archived todos
     * @default []
     * @type Array<ITodo>
     */
    history: {
        type: "array",
        default: []
    }
}
