/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"
import _ from "lodash"
import { count } from "../redux/actions/timer"
import { nextTodo } from "../redux/actions/todos"
import ErrorBoundary from "../containers/ErrorBoundary"
import List from "../containers/List"
import ListWithTime from "../containers/ListWithTime"
import Timer from "../containers/Timer"
import Current from "../containers/Current"
import AddTodo from "../containers/AddTodo"

const App = (props) => {
    return (
        <ErrorBoundary>
            <p>Timer: </p>
            <Timer />

            <p>List:</p>
            {props.todos.items.length !== 0 && <><List list={props.todos.items} /></>}
            <p>Add a task:</p>
            <AddTodo />

            <p>Current: </p>
            {!props.todos.finished && (<><Current item={props.todos.current} /></>)}

            <p>History:</p>
            {!_.isEmpty(props.todos.history) && <><ListWithTime list={props.todos.history} /></>}
        </ErrorBoundary>
    )
}

const mapStateToProps = (state) => ({
    value: state.timer.value,
    timer: state.timer,
    running: state.timer.running,
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => {
    return {
        count: () => dispatch(count()),
        nextTodo: (time) => dispatch(nextTodo(time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
