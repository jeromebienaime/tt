todos.js
---

@file: redux/actions/todos.js

todos.js is a todo-list management. The features are:
-   CRUD
-   timeable single task with timer.js
-   archivable task through an history
-   sequence list

> Plan is to fetch/put/change throug an api entry point

Todos are composed as follow:

// @validators/todos.validator.js

Properties:

-   The property ``items`` references the un-completed tasks.
-   The property ``current`` references the current running task
-   The property ``history`` references the completed and archived tasks
-   The property ``running`` is a boolean that checks if a task is running or not
-   The property ``finished`` is a boolean that checks if the todo-list is finished

To use todos, here is a basic react.js component that will render it:

// @storybook/3-List.stories.js 
