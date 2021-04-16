import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {set_Checkpoints} from "../store/action/equipementsAction";
import {useDispatch, useSelector} from "react-redux";
import EquipementDescription from "./EquipementDescription";

const EquipementDetail = (props) => {
    const [getSelectedEquipement, setSelectedEquipement] = useState([])

    const dispatch = useDispatch();
    let checkpoints = useSelector(state => state.equipement.checkpoints);

    useEffect(() => {
        dispatch(set_Checkpoints());
        if (!props.location.equipement) {
            setSelectedEquipement(JSON.parse(localStorage.getItem('Selected_Equipement')))
        } else {
            localStorage.setItem('Selected_Equipement', JSON.stringify(props.location.equipement));
            setSelectedEquipement(JSON.parse(localStorage.getItem('Selected_Equipement')))
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
                    <EquipementDescription equipement={getSelectedEquipement}/>
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
export default EquipementDetail

/*

   {Object.keys(checkpoints).filter((key) => checkpoints[key].equipmentKey === getSelectedEquipement ).map((item, i) => (
                        <>
                           <p>name:  {checkpoints[item].name}</p>
                           <p>fault: {checkpoints[item].fault}</p>
                       </>
                    ))}
*/