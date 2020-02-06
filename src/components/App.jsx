import React from "react"
import {connect} from "react-redux"

import Timer from "../containers/Timer"

const App = () => {
    return (
        <>
            <Timer time={this.props.timer} />
        </>
    )
}

const mapStateToProps = {
    timer: state.timer
}

export default connect(mapStateToProps)(App)
