import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {createStore} from 'store/index';

import {initialState as AsideInitialState} from 'reducers/aside';
import {initialState as RouterInitialState} from 'reducers/router';
import {initialState as SearchInitialState} from 'reducers/search';

import {Boundary} from 'components/Boundary';

import Router from 'routs/index';

const store = createStore((window as any).__PRELOADED_STATE__);

import './scss/index.scss';

ReactDOM.hydrate(
    (
        <Boundary>
          <Provider store={store}>
            <BrowserRouter>
              {Router}
            </BrowserRouter>
          </Provider>
        </Boundary>
    ),
    document.getElementById('root'),
);
