import React from 'react';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import { H1, Heading1, Heading3 } from '../../components/UI/Heading/Heading.style';
import { InnerText2 } from '../../components/UI/Text/text.style';
import { useParams } from 'react-router-dom';
import { Heading4, Heading5 } from '../../components/UI/Card/CardBox.style';

function MedicineData(props) {
    const { id } = useParams()

    const medicines = JSON.parse(localStorage.getItem('medicines'))

    return (
        <div>
            <div className='container'>
                <div className='revicard'><BackBtn /></div>
                {medicines.map((v) => {
                    if (parseInt(id) === v.id) {
                        return (
                            <div className='revicard'>
                                <div>
                                    <H1>Medicine: {v.name}</H1>
                                    <Heading4>Price: {v.price + ' ₹'} </Heading4>
                                    <Heading4 className='block'>Expiry: {v.expiry} </Heading4>
                                    <InnerText2>{v.description}</InnerText2>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    );
}

export default MedicineData;