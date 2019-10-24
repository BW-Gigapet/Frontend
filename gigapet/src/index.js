import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { reducer } from './reducers';

const loadState = () => {
    console.log('loading state....')
	try {
		const serializedState = localStorage.getItem('state');
        if(serializedState === null)
        {
            console.log('no state saved to load....')
			return undefined;
        }
        console.log('loaded state....', JSON.parse(serializedState))
		return JSON.parse(serializedState);
	} catch(err){
        console.log('loading state failed....')
		return undefined;
	}
}

const saveState = state =>{
    console.log('saving state....')
	try{
        const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState)
        console.log('saved state....')
	} catch (err) {
		console.log('saving state failed....', err)
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore( 
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk, logger))
);

// store.subscribe(() => {
// 	saveState(store.getState());
// });
window.addEventListener('beforeunload', () =>{
    saveState(store.getState());
});

ReactDOM.render(
<Provider store={ store } >
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
