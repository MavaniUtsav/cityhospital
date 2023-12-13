import React, { useState } from 'react';

function UseMemo(props) {
    const [count, setCount] = useState(1)

    for (let i=1; i<=count; i++) {
        
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button></button>
        </div>
    );
}

export default UseMemo;