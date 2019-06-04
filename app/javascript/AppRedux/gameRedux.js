import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    gameRequest: ['data'],
    gameSuccess: ['payload'],
    gameFailure: null
})

export const GameTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    fetching: null,
    payload: null,
    error: null
})

/* ------------- Selectors ------------- */

export const GameSelectors = {
    getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
    state.merge({ fetching: true, data })

// successful api lookup
export const success = (state, action) => {
    const { payload } = action
    return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
    state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GAME_REQUEST]: request,
    [Types.GAME_SUCCESS]: success,
    [Types.GAME_FAILURE]: failure
})
