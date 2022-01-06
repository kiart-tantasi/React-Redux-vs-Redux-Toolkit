import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from "../store/counter";
import { colorActions } from '../store/color';
import styles from "../App.module.css";

export default function Counter() {

    const storeState = useSelector(state => state.counter.counter);
    const colorStore = useSelector(state => state.color.color)
    const dispatch = useDispatch();

    function handleIncrement() {
        dispatch(counterActions.increment());
    }

    function handleDecrement() {
        dispatch(counterActions.decrement());
    }

    function handleReset() {
        dispatch(counterActions.reset(100));
    }

    function handlePlusTen() {
        dispatch(counterActions.plus(10));
    }

    function handleMinusTen() {
        dispatch(counterActions.minus(10));
    }

    const [colorNum, setColorNum] = useState(0); 

    function handleChangeColor() {
        const arr = [colorActions.green(),colorActions.red(),colorActions.blue()]
        if (colorNum === 3) {
            dispatch(colorActions.green());
            setColorNum(1);
        } else if (colorNum >= 0 || colorNum <= 2) {
            dispatch(arr[colorNum]);
            setColorNum(prev => {
                return prev + 1;
            });
        } else {
            setColorNum(0);
        }
    }

    return (
        <div className={styles.Counter}>
            <h1 style={{"color":colorStore}}>Redux with Toolkit</h1>
            <button onClick={handleChangeColor}>change heading's color</button>
            <br/><br/>
            <h1>{storeState}</h1>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <br/><br/>
            <button onClick={handlePlusTen}>+10</button>
            <button onClick={handleMinusTen}>-10</button>
            <br/><br/>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}
