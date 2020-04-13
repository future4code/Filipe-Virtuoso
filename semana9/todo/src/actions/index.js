export const addTask = function (name) {
  return {
    type: 'ADD_TASK',
    payload: {
      name
    }
  }
}

export const removeTask = function (id) {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id
    }
  }
}

export const getTasksByFilter = function (filter) {
  return {
    type: 'GET_TASKS_BY_FILTER',
    payload: {
      filter
    }
  }
}

export const completeTask = function (id) {
  return {
    type: 'COMPLETE_TASK',
    payload: {
      id
    }
  }
}

export const completeAllTasks = function () {
  return {
    type: 'COMPLETE_ALL_TASKS'
  }
}

export const removeAllCompleteTasks = function () {
  return {
    type: 'REMOVE_ALL_COMPLETE_TASKS'
  }
}