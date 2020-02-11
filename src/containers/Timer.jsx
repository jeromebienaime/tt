/* eslint-disable react/prop-types */

import React from "react"
import ReactInterval from "react-interval"
import { connect } from "react-redux"
import * as timer from "../redux/actions/timer"

const Timer = (props) => {
    const { enabled, timeout, value } = props
    return (
        <>
            <ReactInterval {...{ timeout, enabled }} callback={() => props.count()} />
            <br/>
            <button disabled={enabled} onClick={() => props.toggleTimer(true)}>Start</button>
            <br/>
            <button disabled={!enabled} onClick={() => props.toggleTimer(false)}>Stop</button>
            <br/>
            {value}
        </>
    )
}

const mapStateToProps = (state) => ({
    enabled: state.timer.enabled,
    timeout: state.timer.timeout,
    value: state.timer.value
})

const mapDispatchToProps = (dispatch) => ({
    count: () => dispatch(timer.count()),
    toggleTimer: (toggler) => dispatch(timer.toggleTimer(toggler))
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
