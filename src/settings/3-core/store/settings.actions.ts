import type { Action } from "../../4-domain/types/action"

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