import React from 'react';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, incrementQty, removeItem } from '../../redux/Action/cart.action';

function Cart(props) {
    const medicines = useSelector(state => state.medicines)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const cartData = cart.cart.map((v, i) => {
        const med = medicines.medicines.find((value) => value.id === v.id)

        return { ...med, ...v }
    })

    const incQty = (id) => {
        dispatch(incrementQty(id))
    }

    const decQty = (id) => {
        dispatch(decrementQty(id))
    }

    const removeCartItem = (id) => {
        dispatch(removeItem(id))
    }

    console.log(cart.cart);

    return (
        <section className='margin'>
            <div className='container'>
                <BackBtn />
                <div className="card">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">3 items</div>
                                </div>
                            </div>
                            {
                                cartData.map((v,i) => {
                                    return (
                                        <div className="row border-top">
                                            <div className="row main align-items-center">
                                                {/* <div className="col-2"><img id='img' className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div> */}
                                                <div className="col">
                                                    <div className="row text-muted">{v.name}</div>
                                                    <div className="row descCart" >{v.desc}</div>
                                                </div>
                                                <div className="col">
                                                    <button href="#" className='cbtn' onClick={() => decQty(v.id)}>-</button><a href="#" className="border">{v.qty}</a><button href="#" className='cbtn'  onClick={() => incQty(v.id)}>+</button>
                                                </div>
                                                <div className="col">{'₹ '+v.price * v.qty} <button className="close" style={{ marginLeft: '6rem', backgroundColor: 'transparent', border: 'none', fontSize: '18px' }} onClick={() => removeCartItem(v.id)}>✕</button></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-4 summary">
                            <div><h5><b>Summary</b></h5></div>
                            <hr />
                            {/* <div className="row">
                                <div className="col" style={{ paddingLeft: 0 }}>ITEMS 3</div>
                                <div className="col text-right">€ 132.00</div>
                            </div> */}
                            <form>
                                <p>SHIPPING</p>
                                <select disabled><option className="text-muted">Standard-Delivery- €5.00</option></select>
                                <p>GIVE CODE</p>
                                <input id="code" placeholder="Enter your code" disabled />
                            </form>
                            <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">₹1000</div>
                            </div>
                            <button className="checkoutbtn">CHECKOUT</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Cart;

