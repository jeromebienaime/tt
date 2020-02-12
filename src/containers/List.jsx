/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"
import * as todos from "../redux/actions/todos"
import onEnter from "../services/keyboard.onEnter"

const List = (props) => (
    <ul>
        {props.list.length && props.list.map(item =>
            <li key={item.id}>
                <p>
                    {item.editing
                        ? <input type="text" placeholder={item.label} name="todo-label" onKeyPress={onEnter(props.editTodo(item.id))} />
                        : <span>{item.label}</span>
                    }
                    <button onClick={() => props.toggleEditTodo(item.id)}>E</button>
                    <button onClick={() => props.removeTodo(item.id)} >D</button>
                </p>
            </li>
        )}
    </ul>
)

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(todos.removeTodo({ id })),
    toggleEditTodo: (id) => dispatch(todos.toggleEditTodo({ id })),
    editTodo: (id) => name =>  dispatch(todos.editTodo({ id, name }))
})

export default connect(state => state, mapDispatchToProps)(List)
