import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import * as axios from "axios";

const GET_INFO = 'GET_INFO'
const SET_PARAMS = 'SET_PARAMS'
const SET_LOADING = 'SET_LOADING'

const initialState = {
    data: [],
    name: '',
    camera: '',
    sol: '',
    page: 1,
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                data: [...action.data]
            }
        case SET_PARAMS:
            return {
                ...state,
                name: action.name,
                camera: action.camera,
                sol: action.sol,
                page: action.page
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.loading
            }
        default:
            return state
    }
}

const setData = (data) => ({type: GET_INFO, data})
const setParams = (name, camera, sol, page) => ({type: SET_PARAMS, name, camera, sol, page})
const setLoading = (loading) => ({type: SET_LOADING, loading})

export const getData = (name, camera, sol, page) => {
    return dispatch => {
        dispatch(setLoading(true))
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=hPQZjzjkQkxRY0nLHySkyHm4LSfrJCGSGrwHkwFC`)
            .then(response => {
                console.log(response.data.photos)
                dispatch(setData(response.data.photos))
                dispatch(setLoading(false))
                dispatch(setParams(name, camera, sol, page))
            })
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, [], composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
