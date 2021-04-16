import {SET_CHECKPOINTS_ACTION, SET_EQUIPEMENT_ACTION} from "../action/equipementsAction"

let EQUIPEMENT = [];
let CHECKPOINTS = [];

const initialState = {
    equipement: EQUIPEMENT,
    checkpoints: CHECKPOINTS,
};

const state = (state = initialState, action) => {
    switch (action.type) {
        case SET_EQUIPEMENT_ACTION:
            return {...state, equipement: action.equipement};

        case SET_CHECKPOINTS_ACTION:
            return {...state, checkpoints: action.checkpoints};

        default:
            return state;
    }
};

export default state;