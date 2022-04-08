import type { Action } from "src/shared/types/action"
import type { SettingsState } from "../../4-domain/types/settings-state";
import settingsInitialState from "./settings.initial.state";

const settingsReducer = (state: SettingsState = settingsInitialState, action: Action): SettingsState => {
    switch (action.type) {
        case '@settings/INCREMENT':
            return state + 1;
        case '@settings/DECREMENT':
            return state - 1;
        case '@settings/RESET':
            return settingsInitialState;
        default:
            return state;
    }
}

export {
    settingsReducer
};