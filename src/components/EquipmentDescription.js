import React from "react";

const EquipementDesctiption = ({equipement: equipment}) => {
    return (
        <>
            <div className="photo">
                <img src={equipment.photo}/>
            </div>
            <div className="description">
                <h2>{equipment.name}</h2>
                <p>{equipment.domain}</p>
                <p>domain: {equipment.building}</p>
                <p>niveau: {equipment.niveau}</p>
                <p>local: {equipment.local}</p>
                <p>brand: {equipment.brand}</p>
                <p>model: {equipment.model}</p>
                <p>serialNumber: {equipment.serialNumber}</p>
                <p>quantity: {equipment.quantity}</p>
                <p>status: {equipment.status}</p>
                <p>notes: {equipment.notes}</p>
                <p>nbFaults: {equipment.nbFaults}</p>
            </div>
        </>
    )
}

export default EquipementDesctiption;