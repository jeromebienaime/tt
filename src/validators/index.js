import jsen from "jsen"

import timer from "./timer.validator"
import projects from "./projects.validator"
import clients from "./clients.validator"
import todos from "./todos.validator"

export default jsen({
    type: "object",
    required: ["timer", "projects", "clients", "todos"],
    properties: {
        timer,
        projects,
        clients,
        todos
    }
})
