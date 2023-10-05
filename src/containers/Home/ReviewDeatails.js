import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading1 } from '../../components/UI/Heading/Heading.style';
import { InnerText, InnerText2 } from '../../components/UI/Text/text.style';
import BackBtn from '../../components/UI/BackBtn/BackBtn';

function ReviewDetails(props) {
    const [medicinesData, setMedicinesData] = useState([]);
    let { id } = useParams()

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();

        const fData = data.filter((v) => v.id === parseInt(id))
        setMedicinesData(fData[0]);                                  // Second Type you direct set data variable to medicinesData state
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <div className='revicard'>
                <BackBtn />
                <Heading1>{medicinesData.name}</Heading1>
                <InnerText2 id='center'>{medicinesData.body}</InnerText2>
            </div>
        </div>
    );
}

export default ReviewDetails;


////// Second Type to rendering data of Review ///////

// {
//     medicinesData.map((v) => {
//         if (parseInt(id) === v.id) {
//             return (
//                 <div className='container'>
//                     <div className='revicard'>
//                         <Heading1>{v.name}</Heading1>
//                         <InnerText2 id='center'>{v.body}</InnerText2>
//                     </div>
//                 </div>
//             )
//         }
//     })
// }