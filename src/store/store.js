import { createStore, applyMiddleware  } from'redux'
import thunk from 'redux-thunk';

// import do reducers
import index from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(index, composeWithDevTools());

export default store