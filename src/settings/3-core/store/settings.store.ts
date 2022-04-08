import { createStore } from 'redux';
import { settingsReducer } from './settings.reducer';

const settingsStore = createStore(settingsReducer);

export {
    settingsStore,
};

