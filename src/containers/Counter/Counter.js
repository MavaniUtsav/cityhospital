import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../redux/Action/counter.action';
import { decrement, increment, incrementByFive } from '../../redux/slice/counter.slice';

function Counter(props) {
    let c1 = useSelector(state => state.counter )
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementByFive(5))
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <br></br><br></br>
            <button type='button' onClick={handleIncrement}>+</button>{c1.count}<button type='button' onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;