import React, { useEffect } from 'react';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import { H1, Heading1, Heading3 } from '../../components/UI/Heading/Heading.style';
import { InnerText2 } from '../../components/UI/Text/text.style';
import { useParams } from 'react-router-dom';
import { Heading4, Heading5 } from '../../components/UI/Card/CardBox.style';
import { useDispatch, useSelector } from 'react-redux';
import { getMedicines } from '../../redux/Action/medicines.action';

function MedicineData({ data }) {
    const { id } = useParams()

    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicines)

    useEffect(() => {
        dispatch(getMedicines())
    }, [])

    return (
        <div>
            <div className='container'>
                <div className='revicard'>
                    <br></br><BackBtn />
                </div>
                {medicines.medicines.map((v) => {
                    if (parseInt(id) === v.id) {
                        return (
                            <div className='revicard'>
                                <div>
                                    <H1>Medicine: {v.name}</H1>
                                    <Heading4>Price: {v.price + ' ₹'} </Heading4>
                                    <Heading4 className='block'>Expiry: {v.expiry} </Heading4>
                                    <InnerText2>{v.desc}</InnerText2>
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