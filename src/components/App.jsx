import React from "react"
import {connect, useDispatch} from "react-redux"
import {useEffect} from "react"
import {count} from "../redux/actions/timer"

import Timer from "../containers/Timer"

const App = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const counter = setInterval(() => {
            dispatch(count())
        }, 1000)
        return () => counter
    })
    return (
        <>
            <Timer time={props.value} />
        </>
    )
}

const mapStateToProps =(state) =>  ({
    value: state.timer.value
})

const mapDispatchToProps = (dispatch) => ({
    count: () => dispatch(count())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
