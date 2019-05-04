import {INCREMENT, DECREMENT} from '../actions/counterActions';

const defaultState = {
    count: 0,
    diff: 1,
};

const index = (state = defaultState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                count: state.count + action.payload.diff,
            });
        case DECREMENT:
            return Object.assign({}, state, {
                count: state.count - action.payload.diff,
            });
        default:
            return state
    }
}

export default index;