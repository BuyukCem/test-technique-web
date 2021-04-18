import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {set_Equipment} from "../store/action/action.js";
import {Link} from 'react-router-dom';

const EquipmentList = props => {
    const dispatch = useDispatch();
    const equipments = useSelector(state => state.equipment.equipment);

    useEffect(() => {
        dispatch(set_Equipment());
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
            {Object.keys(equipments).map((item) => (
                <Link to={{
                    pathname: `/equipment/` + item,
                    equipment: equipments[item]
                }}>
                    <tr key={item}>
                        <td>{equipments[item].name}</td>
                        <td>{equipments[item].domain}</td>
                        <td> {equipments[item].nbFaults}</td>
                        <td><img src={equipments[item].photo} alt=""/></td>
                    </tr>
                </Link>
            ))}
            </tbody>
        </table>
    )
}
export default EquipmentList