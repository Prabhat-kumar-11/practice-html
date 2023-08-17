







import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as AuthReducer} from "./authredux/reducer"
import {reducer as forumReducer} from "./forumredux/reducer"
import thunk from "redux-thunk"
const allreducer=combineReducers({
AuthReducer,
forumReducer
})


export const store=legacy_createStore(allreducer,applyMiddleware(thunk)) 