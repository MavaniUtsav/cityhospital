import React from 'react';
import MedicinesCard from '../../components/UI/Card/MedicinesCard';
import { Link, useParams } from 'react-router-dom';
import { Heading1 } from '../../components/UI/Heading/Heading.style';

function Medicines() {
    const medicines = JSON.parse(localStorage.getItem('medicines'))

    return (
        <>
            <div className='container'>
                <div className='mediproducts' >
                <Heading1>Medicines</Heading1>
                <div className='medi'>
                    {
                        
                        medicines.map((v) => {
                            return (
                                <>
                                    <Link to={'/medicine/' + v.id}>
                                    <MedicinesCard
                                        title={v.name}
                                        price={v.price + ' ₹'}
                                    />
                                    </Link>
                                    
                                </>
                            )
                        })
                    }
                    
                </div>
                </div>
            </div>
        </>

    );
}

export default Medicines;