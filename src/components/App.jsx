import React from "react"
import { connect, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { count, stopCount } from "../redux/actions/timer"
import { nextTodo } from "../redux/actions/todos"
import _ from "lodash"
import ErrorBoundary from "../containers/ErrorBoundary"
import List from "../containers/List"
import ListWithTime from "../containers/ListWithTime"
import Timer from "../containers/Timer"
import Current from "../containers/Current"

const App = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const counter = setInterval(() => {
            dispatch(count())
        }, 1000)
        return () => clearInterval(counter)
    }, [])
    return (
        <ErrorBoundary>
            <p>Timer: </p>
            <Timer time={props.value} />

            <p>List:</p>
            {props.todos.items.length != 0 && <><List list={props.todos.items} /></>}

            <p>Current: </p>
            {!props.todos.finished && (<><Current item={props.todos.current} /></>)}

            {!props.todos.finished && <button onClick={() => props.nextTodo({ time: props.value })} >{props.todos.running ? "next" : "start"}</button>}
            {props.todos.finished && <button onClick={() => { clearInterval(counter); props.stopCount() }}>stop</button>}


            <p>History:</p>
            {!_.isEmpty(props.todos.history) && <><ListWithTime list={props.todos.history} /></>}
        </ErrorBoundary>
    )
}

const mapStateToProps = (state) => ({
    value: state.timer.value,
    timer: state.timer,
    running: state.timer.running,
    todos: state.todos,
})

const mapDispatchToProps = (dispatch) => {

    return {
        count: () => dispatch(count()),
        nextTodo: (time) => dispatch(nextTodo(time)),
        stopCount: () => dispatch(stopCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
