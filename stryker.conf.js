// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function (config) {
    config.set({
        mutate: ["src/**/*.js?(x)", "!src/**/*@(.test|.spec|Spec).js?(x)", "!src/validators/**/*.js"],
        mutator: "javascript",
        // testRunner: "jest",
        reporters: ["progress", "clear-text", "html", "dashboard"],
        // coverageAnalysis: "perTest",
        /* jest: {
            projectType: "react"
        }, */
        commandRunner: {
            command: "yarn test:unit" // optionally choose a different command to run
        },
        dashboard: {
            reportType: "full"
        },
        loglevel: "all",
        maxConcurrentTestRunners: 2
    })
}
