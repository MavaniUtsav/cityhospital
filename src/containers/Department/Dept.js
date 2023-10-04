import React from 'react';
import { useParams } from 'react-router-dom';

function Dept(props) {
    let { id } = useParams()

    return (
        <div>
            <h1>This is a Dept Page:{id}</h1>
        </div>
    );
}

export default Dept;