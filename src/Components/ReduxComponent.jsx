import { useDispatch, useSelector } from 'react-redux';
import { setVal } from '../reducer';

const ReduxComponent = () => {
    const val = useSelector(state => state.myFirstReducer.val);
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(setVal(val + 1))}>
            Redux {val}
        </button>
    )
}

export default ReduxComponent;