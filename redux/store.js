import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducer';

import logger from './middlewares/logger';
import throttle from './middlewares/throttle';

// const rootReducer = combineReducers({
//   theme: themeReducer,
// });

const enhancer = applyMiddleware(logger, throttle)

const store = createStore(reducers, enhancer);

export default store;
