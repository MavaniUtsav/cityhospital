import React, { useEffect, useState } from 'react';
import MedicinesCard from '../../components/UI/Card/MedicinesCard';
import { Link, useParams } from 'react-router-dom';
import { Heading1 } from '../../components/UI/Heading/Heading.style';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { API_URL } from '../../Utilities/Api-url';
import { useDispatch, useSelector } from 'react-redux';
import { getMedicines } from '../../redux/Action/medicines.action';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { addToCart } from '../../redux/Action/cart.action';
import { getMedicine } from '../../redux/slice/medicines.slice';


function Medicines({ increment, favItem, setFavItem }) {
    const [filterData, setFilterData] = useState([])
    const [isFavorited, setIsFavorited] = useState(false)

    const dispatch = useDispatch()
    const medicines = useSelector(state => state.medicines)
    console.log(medicines);

    const cart = useSelector(state => state.cart)
    console.log(cart);

    useEffect(() => {
        dispatch(getMedicine())
    }, [])

    const handleAddCart = (id, event) => {
        event.preventDefault()
        dispatch(addToCart(id))
    }

    const handleWishlist = (id, event) => {
        event.preventDefault()

        if (favItem.includes(id)) {
            let fData = favItem.filter((v) => v !== id);
            setFavItem(fData)
        } else {
            setFavItem((prev) => [...prev, id])
        }
    }

    const handleFilter = (value) => {
        // let secondD;

        // secondD = medicines.medicines.filter((v) => {
        //     return (
        //         v.name.toLowerCase().includes(value.toLowerCase()) || v.desc.toLowerCase().includes(value.toLowerCase())
        //     )
        // })

        // switch (value) {
        //     case 'lowtohigh':
        //         secondD = [...medicines.medicines].sort((a, b) => a.price - b.price);
        //         break;

        //     case 'hightolow':
        //         secondD = [...medicines.medicines].sort((a, b) => b.price - a.price);
        //         break;

        //     case 'atoz':
        //         secondD = [...medicines.medicines].sort((a, b) => a.name > b.name ? 1 : -1);
        //         break;

        //     case 'ztoa':
        //         secondD = [...medicines.medicines].sort((a, b) => a.name > b.name ? -1 : 1);
        // }

        // setFilterData(secondD)
    }

    // const finalData = filterData.length > 0 ? filterData : medicines.medicines

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
                        {medicines.error ?
                            <Alert severity="error" id='loading'>
                                <AlertTitle>Error</AlertTitle>
                                This is an error alert — <strong>{medicines.error}</strong>
                            </Alert> :
                            medicines.isLoading ?
                                <div id='loading'>
                                    <CircularProgress />
                                </div>
                                :
                                medicines.medicines.map((v) => {
                                    return (
                                        <>
                                            <Link to={'/medicine/' + v.id}>
                                                <MedicinesCard
                                                    title={v.name}
                                                    price={v.price + ' ₹'}
                                                    isButton='Add'
                                                    isWish={favItem.includes(v.id) ? true : false}
                                                    onHandleCart={(event) => handleAddCart(v.id, event)}
                                                    onHandleWish={(event) => handleWishlist(v.id, event)}
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