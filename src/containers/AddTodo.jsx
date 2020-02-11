/* eslint-disable react/prop-types */

import React from "react"
import { connect } from "react-redux"
import * as todos from "../redux/actions/todos"

const onEnter = (callback) => (event) => {
    if (event.key === "Enter") {
        callback(event.target.value)
        event.target.value = ""
    }
}

const AddTodo = (props) => {
    return (
        <>
            <label htmlFor="add">add a todo</label>
            <input type="text" name="add" id="add" onKeyPress={onEnter(props.addTodo)} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (name) => dispatch(todos.addTodo({ name }))
})

export default connect(state => state, mapDispatchToProps)(AddTodo)
