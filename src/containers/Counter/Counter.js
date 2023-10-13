import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../redux/Action/counter.action';

function Counter(props) {
    let c1 = useSelector(state => state.counter )
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(Increment())
    }

    const handleDecrement = () => {
        dispatch(Decrement())
    }

    return (
        <div>
            <button type='button' onClick={handleIncrement}>+</button>{c1.count}<button type='button' onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;