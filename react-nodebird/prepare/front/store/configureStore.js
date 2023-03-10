import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../reducers';
const configureStore = () => {
    const store = createStore(reducer, enhancer); 
};

const wrapper = createWrapper(configureStore, { 
    debug: process.env.NODE_ENV === 'development',
});
export default wrapper;