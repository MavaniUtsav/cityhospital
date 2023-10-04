import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading1 } from '../../components/UI/Heading/Heading.style';
import { InnerText, InnerText2 } from '../../components/UI/Text/text.style';

function AllMedicines(props) {
    const [medicinesData, setMedicinesData] = useState([]);
    let { id } = useParams()

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();

        setMedicinesData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {
                medicinesData.map((v) => {
                    if (parseInt(id) === v.id) {
                        return (
                            <div className='container'>
                                <div className='medicard'>
                                    <Heading1>{v.name}</Heading1>
                                    <InnerText2 id='center'>{v.body}</InnerText2>
                                </div>
                            </div>
                        )

                    }
                })
            }
        </>
    );
}

export default AllMedicines;