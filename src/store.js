import mainTodo from "./reducers";


import {createStore} from "redux";

const store =createStore(mainTodo,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;