import React from 'react'; 
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counterActions";

export const Counter = (props) => {
    return (
        <div>
            <span>count is : {props.count} </span>
            <button onClick={()=>props.dispatch(decrement(props.diff))}>-</button>
            <button onClick={()=>props.dispatch(increment(props.diff))}>+</button>
        </div>
        );
}
   
const mapStateToProps = state => {
    return {
        count: state.count,
        diff: state.diff,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         handleSubtract: () => {
//             dispatch(decrement(1));
//         },
//         handleAdd: () => {
//             dispatch(increment(1));
//         }
//     }
// }

const CounterC = connect(mapStateToProps)(Counter);

export default CounterC;