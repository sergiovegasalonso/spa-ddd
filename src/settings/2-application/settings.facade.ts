import { settingsStore } from "../3-core/store/settings.store";
import { incrementAction, decrementAction, resetAction } from "../3-core/store/settings.actions";

const getCount = (callback: Function): void => {
    settingsStore.subscribe(() => {
        callback(settingsStore.getState());
    });
};

const increment = (): void => {
    settingsStore.dispatch(incrementAction);
};

const decrement = (): void => {
    settingsStore.dispatch(decrementAction);
};

const reset = (): void => {
    settingsStore.dispatch(resetAction);
};

export {
    getCount,
    increment,
    decrement,
    reset
}