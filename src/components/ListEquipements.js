import React from 'react';

const ListEquipements = ({equipements}) => {
    return (
        <React.Fragment>
            <table>
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
        </React.Fragment>
    )
}

export default ListEquipements