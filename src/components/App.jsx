import React from "react"
import {connect} from "react-redux"

import Timer from "../containers/Timer"

const App = (props) => {
    return (
        <>
            <Timer time={props.timer} />
        </>
    )
}

const mapStateToProps =(state) =>  ({
    timer: state.timer
})

export default connect(mapStateToProps)(App)
