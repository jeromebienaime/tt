import React from "react"
import { connect, useDispatch } from "react-redux"
import { useEffect } from "react"
import { count, stopCount } from "../redux/actions/timer"
import { nextTodo } from "../redux/actions/todos"
import List from "../containers/List"
import Timer from "../containers/Timer"
import Current from "../containers/Current"

const App = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const counter = setTimeout(() => {
            dispatch(count())
        }, 1000)
        return () => counter
    })
    return (
        <>
            <p>Timer: </p>
            <Timer time={props.value} />
            {!!props.todos.finished && <>{props.stopCount()}</>}
            <p>List:</p>
            <List list={props.todos.items} />
            
            {!props.todos.finished && <button onClick={() => props.nextTodo(props.value)} >{props.todos.running ? "next": "start"}</button>}
            {props.todos.current && (<><p>Current</p>
                <Current item={props.todos.current} /></>)}
        </>
    )
}

const mapStateToProps = (state) => ({
    value: state.timer.value,
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
