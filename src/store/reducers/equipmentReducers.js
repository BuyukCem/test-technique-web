import {SET_EQUIPEMENT_ACTION} from "../action/action"
import {SET_CHECKPOINTS_ACTION} from "../action/action"

const EQUIPMENT = [];
const CHECKPOINTS = [];

const initialState = {
    equipment: EQUIPMENT,
    checkpoints: CHECKPOINTS,
};

const state = (state = initialState, action) => {
    switch (action.type) {
        case SET_EQUIPEMENT_ACTION:
            return {...state, equipment: action.equipment};

        case SET_CHECKPOINTS_ACTION:
            return {...state, checkpoints: action.checkpoints};

        default:
            return state;
    }
};

export default state;