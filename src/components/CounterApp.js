import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,deccrement } from '../store/action/action';

const CounterApp = () => {
   const count = useSelector(state =>state.counterReducer);
   const dispatch = useDispatch();
    return (
        <div className='counter_app'>
            <h2>Redux CounterApp</h2>
            <button className='increment' onClick={()=>(dispatch(increment()))}>Increment</button>
            <span>{count}</span>
            <button className='decrement' onClick={()=>(dispatch(deccrement()))}>Decrement</button>
        </div>
    )
}

export default CounterApp