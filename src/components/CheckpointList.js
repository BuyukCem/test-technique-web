import React from 'react';

const Checkpoint = ({checkpoints, id}) => {
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
            {
                Object.keys(checkpoints)
                    .filter((key) => checkpoints[key].equipmentKey == id)
                    .map((item) => (
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
    )
}
export default Checkpoint;

