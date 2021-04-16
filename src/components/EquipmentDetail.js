import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {set_Checkpoints} from "../store/action/equipmentsAction";
import {useDispatch, useSelector} from "react-redux";
import EquipmentDescription from "./EquipmentDescription";

const EquipmentDetail = (props) => {
    const [getSelectedEquipment, setSelectedEquipment] = useState([])

    const dispatch = useDispatch();
    const checkpoints = useSelector(state => state.equipment.checkpoints);

    useEffect(() => {
        dispatch(set_Checkpoints());
        if (!props.location.equipment) {
            setSelectedEquipment(JSON.parse(localStorage.getItem('selected_equipment')))
        } else {
            localStorage.setItem('selected_equipment', JSON.stringify(props.location.equipment));
            setSelectedEquipment(JSON.parse(localStorage.getItem('selected_equipment')))
        }

    }, [dispatch]);

    return (
        <>
            <div className="card">
                <nav>
                    <Link to={`/`}>
                        Retour aux equipements
                    </Link>
                </nav>
                <div className="wrapper">
                    {console.log(props)}
                    <EquipmentDescription equipement={getSelectedEquipment}/>
                </div>

                <div className="caracteristiques">
                    <h3>Caractéristiques : </h3>
                    <table className="list">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>fault</th>
                            <th>recommandation</th>
                            <th>Photo</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(checkpoints)
                                .filter((key) => checkpoints[key].equipmentKey == props.match.params.id)
                                .map((item, index) => (
                                    <>
                                        <tr key={item}>
                                            <td>{checkpoints[item].name}</td>
                                            <td>{checkpoints[item].fault}</td>
                                            <td> {checkpoints[item].recommandation}</td>
                                            <td><img src={checkpoints[item].photo} alt=""/></td>
                                        </tr>
                                    </>
                                ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default EquipmentDetail