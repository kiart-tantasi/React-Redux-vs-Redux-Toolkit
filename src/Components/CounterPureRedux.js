import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from "../App.module.css";

export default function CounterPureRedux() {

    const counterStore = useSelector(state => state.counterReducer.counter);
    const colorStore = useSelector(state => state.colorReducer.color);

    const dispatch = useDispatch();

    function handleIncrement() {
        dispatch({type:"increment"});
    }

    function handleDecrement() {
        dispatch({type:"decrement"});
    }

    function handleReset() {
        dispatch({type:"resetCounter"});
        dispatch({type:"resetColor"});
    }

    function handlePlusFive() {
        dispatch({type:"plus", payload: 5});
    }

    function handleMinusFive() {
        dispatch({type:"minus", payload: 5});
    }

    const [ colorNum, setColorNum ] = useState(0);

    function handleChangeColor() {
        const arr = ["green","red","blue"]
        if (colorNum > 2) {
            dispatch({type:"green"});
            setColorNum(1);
        } else if (colorNum >= 0 || colorNum <= 1) {
            dispatch({type:arr[colorNum]});
            setColorNum(prev => prev + 1);                
        } else {
            setColorNum(0);
        }
    }

    return (
        <div className={styles.Counter}>
            <h1 style={{"color":colorStore}}>Pure Redux</h1>
            <button onClick={handleChangeColor}>change head's color</button>
            <br/>
            <h1>{counterStore}</h1>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <br/><br/>
            <button onClick={handlePlusFive}>+5</button>
            <button onClick={handleMinusFive}>-5</button>
            <br/><br/>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}