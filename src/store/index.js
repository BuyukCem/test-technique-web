import ReduxThunk from "redux-thunk";
import equipmentReducers from "./reducers/equipmentReducers"
const {createStore, combineReducers, applyMiddleware} = require("redux");

const rootReducer = combineReducers({
    equipment: equipmentReducers
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