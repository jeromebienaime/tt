import jsen from "jsen"

import timer from "./timer"
import projects from "./projects"
import clients from "./clients"
import todos from "./todos"

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
