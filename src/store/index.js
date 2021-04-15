import ReduxThunk from "redux-thunk";

import equipementReducers from "./reducers/equipementReducers"
const {createStore, combineReducers, applyMiddleware} = require("redux");


const rootReducer = combineReducers({
    equipement: equipementReducers
});

const store = createStore(
    rootReducer,
    // compose(
    //   applyMiddleware(ReduxThunk),
    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
    applyMiddleware(ReduxThunk)
);
export default store