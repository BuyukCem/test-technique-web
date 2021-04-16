import {database} from "../../utils/firebase";
import React from "react";

const initialState = []
export const SET_EQUIPEMENT_ACTION = "SET_EQUIPEMENT_ACTION"
export const SET_CHECKPOINTS_ACTION = "SET_CHECKPOINTS_ACTION"

export const set_Equipement = () => {
    return async dispatch => {
        const equipments = database.ref('Equipments')
            let data
            await equipments.once('value', snapshot => {
               data = [snapshot.val()]
            })
        dispatch({ type: SET_EQUIPEMENT_ACTION, equipement: data[0] });
    };
};

export const set_Checkpoints = () =>{
    return async dispatch => {
        const checkpoints = database.ref('Checkpoints')
        let data
        await checkpoints.once('value', snapshot => {
            data = [snapshot.val()]
        })
        dispatch({ type: SET_CHECKPOINTS_ACTION, checkpoints: data[0] });
    };
}