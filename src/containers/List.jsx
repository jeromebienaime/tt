/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"
import * as todos from "../redux/actions/todos"

const List = ({ list, removeTodo }) => (
    <ul>
        {list.length && list.map(item =>
            <li key={item.id}>
                <p>{item.label} <button onClick={() => removeTodo(item.id)} >D</button></p>
            </li>
        )}
    </ul>
)

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(todos.removeTodo({ id }))
})

export default connect(state => state, mapDispatchToProps)(List)
