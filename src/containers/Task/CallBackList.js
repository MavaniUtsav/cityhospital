import React, { useEffect } from 'react';

function CallBackList({exData}) {
    const [data, setData] = React.useState([]);

    useEffect(() => {  
        console.log('Child');
        setData(exData(10));
    }, [exData])

    return (
        <div>
            {data.map((v) => {
                return (
                    <p>{v}</p>
                )
            })}
        </div>
    );
}

export default CallBackList;