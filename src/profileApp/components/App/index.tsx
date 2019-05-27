import * as React from 'react';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import ProfileContainer from '../../container/Profile';

import {rootReducer} from "../../store";

import RootSaga from '../../sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

const App: React.FunctionComponent<any> = () => {
    return (
        <Provider store={store}>
            <ProfileContainer/>
        </Provider>
    )
};

export default App;

