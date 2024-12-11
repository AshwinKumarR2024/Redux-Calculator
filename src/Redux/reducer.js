import { combineReducers } from "redux";

const initialAddState = {
    result : 0
}

const addReducer = (state = initialAddState , action) => {
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
}

const initialSubtractState = {
    result : 0
}

const subtractReducer = (state = initialSubtractState , action) => {
    switch(action.type){
        case 'SUBTRACT':
            return{
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
}

const initialMultiplyState = {
    result : 0
}

const multiplyReducer = (state = initialMultiplyState , action) => {
    switch(action.type){
        case 'MULTIPLY':
            return{
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
}

const initialDivideState = {
    result : 0
}

const divideReducer = (state = initialDivideState , action) => {
    switch(action.type){
        case 'DIVIDE':
            return{
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
}

const initialModuloState = {
    result : 0
}

const moduloReducer = (state = initialModuloState , action) => {
    switch(action.type){
        case 'MODULO':
            return{
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
}

const initialPowerState = {
    result : 0
}

const powerReducer = (state = initialPowerState , action) => {
    switch(action.type){
        case 'POWER':
            return{
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
}

const rootReducer = combineReducers({
    add: addReducer,
    subtract: subtractReducer,
    multiply: multiplyReducer,
    divide: divideReducer,
    modulo: moduloReducer,
    power: powerReducer
})

export default rootReducer