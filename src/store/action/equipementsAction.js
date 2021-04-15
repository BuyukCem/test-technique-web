import {database} from "../../utils/firebase";
import React from "react";

const initialState = []
export const SET_EQUIPEMENT_ACTION = "SET_EQUIPEMENT_ACTION"

export const set_Equipement = () => {
    return async dispatch => {
        const equipments = database.ref('Equipments')
            let data
            await equipments.once('value', snapshot => {
               data = [snapshot.val()]
            })
        console.log(data[0])
        dispatch({ type: SET_EQUIPEMENT_ACTION, equipement: data[0] });
    };
};