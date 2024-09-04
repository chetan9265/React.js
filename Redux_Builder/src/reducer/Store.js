import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { reducer as  Counter } from "../reducer/Counter"
import { reducer as  Theme } from "../reducer/themereducer"
import { thunk } from "redux-thunk"

const rootreducer=combineReducers({Theme,Counter})
export  const Store=legacy_createStore(rootreducer,applyMiddleware(thunk))

