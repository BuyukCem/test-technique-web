import {database} from "../../utils/firebase";
import React from "react";


export const SET_EQUIPEMENT_ACTION = "SET_EQUIPEMENT_ACTION"
export const SET_CHECKPOINTS_ACTION = "SET_CHECKPOINTS_ACTION"

export const set_Equipment = () => {
    return async dispatch => {
        const checkpoints = database.ref('Equipments')
        let data = []
        await checkpoints.orderByChild('name').once('value', snapshot => {
            snapshot.forEach((childSnapshot) => {
                const value = childSnapshot.val();
                data.push({ key: childSnapshot.key, value });
            });
        })
        dispatch({ type: SET_EQUIPEMENT_ACTION, equipment: data });
    };
};

export const set_Checkpoints = () =>{
    return async dispatch => {
        const checkpoints = database.ref('Checkpoints')
        let data = []
        await checkpoints.once('value', snapshot => {
            snapshot.forEach((childSnapshot) => {
                const value = childSnapshot.val();
                data.push({ key: childSnapshot.key, value });
            });
        })
        dispatch({ type: SET_CHECKPOINTS_ACTION, checkpoints: data });
    };
}