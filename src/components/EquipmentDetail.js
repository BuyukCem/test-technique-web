import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {set_Checkpoints} from "../store/action/action";
import {useDispatch, useSelector} from "react-redux";
import EquipmentDescription from "./EquipmentDescription";
import CheckpointList from "./CheckpointList";

const EquipmentDetail = (props) => {
    const [getSelectedEquipment, setSelectedEquipment] = useState([])

    const dispatch = useDispatch();
    const checkpoints = useSelector(state => state.equipment.checkpoints);

    useEffect(() => {
        dispatch(set_Checkpoints());
        if (!props.location.equipment) {
            setSelectedEquipment(JSON.parse(localStorage.getItem('selected_equipment')))
        } else {
            localStorage.setItem('selected_equipment', JSON.stringify(props.location.equipment.value));
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

                <div className="characteristics">
                    <h3>Points de contrôle et défauts associés : </h3>
                        <CheckpointList checkpoints={checkpoints} id={props.match.params.id} />
                </div>
            </div>

        </>

    )
}

export default EquipmentDetail