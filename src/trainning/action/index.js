import * as type from '../consts/ActionTypes'
export const status = () => {
    return {
        type: type.TOGGOLE_STATUS,
    }
}

export const soft = (soft) => {
    return {
        type: type.SOFT,
        soft // sort : soft
    }
}