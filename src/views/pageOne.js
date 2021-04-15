import React, {useEffect, useState} from 'react';
import {database} from '../utils/firebase';
import ListEquipements from "../components/ListEquipements";

function Pageone() {
    const [getEquipments, setEquipments] = useState([])
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const equipments = database.ref('Equipments')
                await equipments.once('value', snapshot => {
                    const res = [snapshot.val()];
                    setEquipments(res)
                });
                SetIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        })();
    }, []);

    return (
        <div>
        {
            isLoading ? <div>Chargement ....</div> :
                <ListEquipements equipements={getEquipments[0]}/>
        }
        </div>
    );

}

export default Pageone;
