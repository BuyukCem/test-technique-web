import {SET_EQUIPEMENT_ACTION} from "../action/equipementsAction"

let EQUIPEMENT = [];

const initialState = {
    equipement: EQUIPEMENT,
};

const state = (state = initialState, action) => {
    switch (action.type) {
        case SET_EQUIPEMENT_ACTION:
            return {...state, equipement: action.equipement};

        default:
            return state;
    }
};

export default state;