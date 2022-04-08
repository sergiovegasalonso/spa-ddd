import type { Action } from "src/shared/types/action"

const incrementAction: Action = {
    type: '@settings/INCREMENT'
}

const decrementAction: Action = {
    type: '@settings/DECREMENT'
}

const resetAction: Action = {
    type: '@settings/RESET'
}

export {
    incrementAction,
    decrementAction,
    resetAction
}