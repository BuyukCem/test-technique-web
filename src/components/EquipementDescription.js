import React from "react";

const EquipementDesctiption = ({equipement}) => {
    return (
        <>
            <div className="photo">
                <img src={equipement.photo}/>
            </div>
            <div className="description">
                <h2>{equipement.name}</h2>
                <p>{equipement.domain}</p>
                <p>domain: {equipement.building}</p>
                <p>niveau: {equipement.niveau}</p>
                <p>local: {equipement.local}</p>
                <p>brand: {equipement.brand}</p>
                <p>model: {equipement.model}</p>
                <p>serialNumber: {equipement.serialNumber}</p>
                <p>quantity: {equipement.quantity}</p>
                <p>status: {equipement.status}</p>
                <p>notes: {equipement.notes}</p>
                <p>nbFaults: {equipement.nbFaults}</p>
            </div>
        </>
    )
}

export default EquipementDesctiption;