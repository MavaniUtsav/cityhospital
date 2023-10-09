import React, { useState } from 'react';
import MedicinesCard from '../../components/UI/Card/MedicinesCard';
import { Link, useParams } from 'react-router-dom';
import { Heading1 } from '../../components/UI/Heading/Heading.style';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Medicines() {
    const [filterData, setFilterData] = useState([])

    const medicines = JSON.parse(localStorage.getItem('medicines'))

    const handleFilter = (value) => {
        let secondD;

        secondD = medicines.filter((v) => {
            return (
                // console.log(v)
                v.name.toLowerCase().includes(value.toLowerCase()) || v.description.toLowerCase().includes(value.toLowerCase())
            )
        })

        switch (value) {
            case 'lowtohigh':
                secondD = [...medicines].sort((a, b) => a.price - b.price);
                break;

            case 'hightolow':
                secondD = [...medicines].sort((a, b) => b.price - a.price);
                break;

            case 'atoz':
                secondD = [...medicines].sort((a, b) => a.name > b.name ? 1 : -1);
                break;

            case 'ztoa':
                secondD = [...medicines].sort((a, b) => a.name > b.name ? -1 : 1);
        }

        console.log(secondD);
        setFilterData(secondD)
    }

    const finalData = filterData.length > 0 ? filterData : medicines

    return (
        <section id='medicines'>
            <div className='container'>
                <BackBtn />
            </div>
            <div className='container'>
                <Heading1>Medicines</Heading1>
                <div id='back'>
                    <div className='search'>
                        <div id='filter'>
                            <select name="dropdown" id='dropdown' onChange={(e) => handleFilter(e.target.value)}>
                                <option value="">--   Select   --</option>
                                <option value="atoz">A to Z</option>
                                <option value="ztoa">Z to A</option>
                                <option value="hightolow">Price(High to Low)</option>
                                <option value="lowtohigh">Price(Low to High)</option>
                            </select>
                        </div>
                        <div className="search__container">
                            <input className="search__input" type="text" placeholder="Search" onChange={(e) => handleFilter(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='mediproducts' >
                    <div className='medi'>
                        {

                            finalData.map((v) => {
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
        </section>

    );
}

export default Medicines;