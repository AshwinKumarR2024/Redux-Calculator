export const addNumber = (value) => ({
    type:"ADD",
    payload : value,
})

export const subtractNumber = (value) => ({
    type:"SUBTRACT",
    payload : value,
})

export const multiplyNumber = (value) => ({
    type:"MULTIPLY",
    payload : value,
})

export const divideNumber = (value) => ({
    type:"DIVIDE",
    payload : value,
})

export const moduloNumber = (value) => ({
    type:"MODULO",
    payload : value,
})

export const powerNumber = (value) => ({
    type:"POWER",
    payload : value,
})