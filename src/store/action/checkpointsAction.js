import {database} from "../../utils/firebase";
import React from "react";

export const SET_CHECKPOINTS_ACTION = "SET_CHECKPOINTS_ACTION"

export const set_Checkpoints = () =>{
    return async dispatch => {
        const checkpoints = database.ref('Checkpoints')
        let data = []
        await checkpoints.once('value', snapshot => {
            data = [snapshot.val()]
        })
        dispatch({ type: SET_CHECKPOINTS_ACTION, checkpoints: data[0] });
    };
}