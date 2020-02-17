timer.js
---

@file: redux/actions/timer.js

timer.js embrace the actions and action types of the redux architecture.
It is basically a value that increments over time and can be stopped over time.

> A plan is to manage a collection of timers in the near future, but is currently not implemented.

To initiate the value of the timer, you will need in your state an object which implements the following interface:

```typescript
// typescript

interface ITimer {
    value: number
}
```

+   The method ``count()`` will start the timer

+   The method ``stopCount()`` will stop the timer

To use timer, here is a basic react.js component that will render it:

```js
// @file components/Timer.jsx

import React from "react"
import { connect, useDispatch } from "react-redux"
import { useEffect } from "react"
import { count, stopCount } from "../redux/actions/timer"

const Timer = props => {
    const dispatch = useDispatch()
    useEffect(() => {
        const counter = setTimeout(() => {
            dispatch(count())
        }, 1000)
        return () => counter
    })

     return (
        <>
            <h1>Timer: </h1>
            <p>{props.value}</p>
            <button onClick={() => props.stopCount()}>stop</button>
        </>
    )
}
const mapStateToProps = (state) => ({
    value: state.value,
})

const mapDispatchToProps = (dispatch) => {
    return {
        count: () => dispatch(count()),
        stopCount: () => dispatch(stopCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
```

then call the component with:

```js
// @file App.jsx

import React from "react"
import ReactDOM from "react-dom"
import Timer from "./components/Timer.jsx" 

ReactDOM.render(<><Timer /><>, document.body)
```
