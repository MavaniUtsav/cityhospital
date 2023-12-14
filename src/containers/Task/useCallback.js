import React, { useCallback, useState } from 'react';
import CallBackList from './CallBackList';

function UseCallback(props) {
    const [theme, setTheme] = useState(false)
    const [num, setNum] = useState(0)

    const themeStyle = {
        backgroundColor: theme ? 'maroon' : 'white',
        color: theme ? 'white' : 'maroon',
        // fontSize: theme ? '20px' : '15px'
    }

    // const getData = () => {
    //     return [num, num+2, num+4]
    // }

    const getData = useCallback((ex) => {
        return [num+ex, num+ex*2, num+ex*3]
    }, [num])

    return (
        <div className='container' style={themeStyle} >
            <br></br>
            <br></br>
            <br></br>
            <textarea onChange={(e) => setNum(parseInt(e.target.value))} style={{height: '30px', width: '150px'}}/>
            <br></br>
            <button onClick={() => setTheme(!theme)}>Change Theme</button>
            <br></br>
            <CallBackList exData={getData}/>
        </div>
    );
}
// (useCallback) is a React Hook that Memorize function between re-renders.

export default UseCallback;