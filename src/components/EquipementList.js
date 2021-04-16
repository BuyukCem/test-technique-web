import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {set_Equipement} from "../store/action/equipementsAction";
import {Link, NavLink} from 'react-router-dom';

const EquipementList = props => {
    const dispatch = useDispatch();
    let equipements = useSelector(state => state.equipement.equipement);

    useEffect(() => {
        dispatch(set_Equipement());
    }, [dispatch]);

    return (
        <table className="list">
            <thead>
            <tr>
                <th>Name</th>
                <th>Domain</th>
                <th>Défauts associés</th>
                <th>Photo</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(equipements).map((item, index) => (
                <Link to={{
                        pathname:`/equipment/` + item,
                        equipement: equipements[item]
                }}>

                    <tr key={item}>
                        <td>{equipements[item].name}</td>
                        <td>{equipements[item].domain}</td>
                        <td> {equipements[item].nbFaults}</td>
                        <td><img src={equipements[item].photo} alt=""/></td>
                    </tr>
                </Link>
            ))}
            </tbody>
        </table>
    )
}
export default EquipementList