import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {set_Equipment} from "../store/action/action";
import {Link} from 'react-router-dom';

const EquipmentList = () => {
    const dispatch = useDispatch();
    const equipments = useSelector(state => state.equipment.equipment);

    useEffect(() => {
        dispatch(set_Equipment());
    }, [dispatch]);

    const generateRow = equipments.map(row =>
        <Link to={{
            pathname: `/equipment/` + row.key,
            equipment: row
        }}>
            <tr key={row.key}>
                <td>{row.value.name}</td>
                <td>{row.value.domain}</td>
                <td>{row.value.nbFaults}</td>
                <td><img src={row.value.photo} alt={row.value.name}/></td>
            </tr>
        </Link>
    )

    function handleChange(e) {
        console.log(e.target.value);
    }

    return (
        <>
            <input name="firstName" onChange={handleChange} />
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
                {generateRow}
                </tbody>
            </table>
        </>

    )
}
export default EquipmentList