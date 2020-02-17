import React from "react"
import Chance from "chance"
import { List } from "../containers/List"
import { lorem } from "faker"

export default {
    title: "List",
    component: List
}

const todos = Array(5).fill({}).map(item => ({
    id: Chance().ssn(),
    editing: false,
    label: lorem.sentence()
}))

export const Todos = () => <List list={todos} />
