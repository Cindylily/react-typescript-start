import { createStore } from 'redux';
import { enthusiasm } from './reduces/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

export default store;