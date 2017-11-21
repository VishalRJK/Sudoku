import {createStore,applyMiddleware} from 'redux';
import rootreducer from '../reducers/indexreducer';

export default function configureStore(initialState) {
    return createStore(
        rootreducer,
        initialState,
    );
}