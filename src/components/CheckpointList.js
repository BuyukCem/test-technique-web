import React from 'react';

const Checkpoint = ({checkpoints, id}) => {

    const generateRowCheckpoint = checkpoints.filter((row, key) => row.value.equipmentKey == id).map(row =>
        <div>
            <tr key={row.key}>
                <td>{row.value.name}</td>
                <td>{row.value.fault}</td>
                <td> {row.value.recommandation}</td>
                <td><img src={row.value.photo} alt=""/></td>
            </tr>
        </div>
    )

    return (
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
            {generateRowCheckpoint}
            </tbody>
        </table>
    )
}
export default Checkpoint;

