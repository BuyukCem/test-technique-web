import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {set_Equipement} from "../store/action/equipementsAction";

const EquipementList = props => {
    const dispatch = useDispatch();
    let equipements = useSelector(state => state.equipement.equipement);

    useEffect(() => {
        dispatch(set_Equipement());
    }, [dispatch]);

    return (
        <table className="equipement-list">
            <thead>
            <tr className="">
                <th className="">Name</th>
                <th className="">Domain</th>
                <th className="">Défauts associés</th>
                <th className="">Photo</th>
            </tr>
            </thead>
            <tbody>
                {Object.keys(equipements).map((item, i) => (
                     <tr key={item}>
                         <td>{equipements[item].name}</td>
                         <td>{equipements[item].domain}</td>
                         <td> {equipements[item].nbFaults}</td>
                         <td><img src={equipements[item].photo} alt=""/></td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}
export default EquipementList