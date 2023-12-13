import React, { useEffect, useRef, useState } from 'react';

function UseRef(props) {
    const [myData, setMyData] = useState('');
    // const [count, setCount] = useState();

    const count = useRef(0);
    const element = useRef('');
    const preValue = useRef('');
    console.log(preValue.current);

    useEffect(() => {
        // setCount(count + 1)
        count.current = count.current + 1;

        preValue.current = myData
    })

    const handleChange = () => {
        console.log(element);
        console.log(element.current);
        element.current.style.backgroundColor = "#ff6337";
        element.current.focus()
    }


    return (
        <div className='container'>
            <br></br>
            <br></br>
            <br></br>
            <input 
                ref={element}
                type='text'
                value={myData}
                onChange={(e) => {setMyData(e.target.value)}}
            />
            <p>The number of times render: {count.current}</p>
            <p>Previous Value: {preValue.current}</p>
            <button onClick={handleChange}>submit</button>
        </div>
    );
}

export default UseRef;