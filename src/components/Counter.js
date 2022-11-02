import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from "./store/counter";

const Counter = () => {
    /* The useDispatch hook feeds the type identifier
     into the action required in the store reducer function. */
    const dispatch = useDispatch();
    /* The useSelector hook automatically sets up a subscription to the store.
    This component is automatically notified with an updated counter state
    when the value changes. */
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }
//
//     decrementHandler() {
//         this.props.decrement();
//     }
//
//     toggleCounterHandler() {
//
//     }
//
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// // First arg of connect; class equivalent of useSelector
// // Binds state received through Connect to props used by component
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }
//
// // Second arg of connect; class equivalent of useDispatch
// // Binds dispatch functions to props used by component
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: 'decrement' }),
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
