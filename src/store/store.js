import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { RootReducer } from './Reducers/RootReducer';

const logger = createLogger()
const Store = createStore(RootReducer, {}, applyMiddleware(thunk, logger))

export { Store }