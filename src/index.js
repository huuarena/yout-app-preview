import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { CONFIG } from './config';
import YoutAppPreview from './components/YoutAppPreview';

fetch(CONFIG.API_HOST + '/admin/yout-app')
    .then((response) => response.json())
    .then((res) => {
        if (res.success && res.payload.widgets.length) {
            const widgets = res.payload.widgets;

            for (let i = 0; i < widgets.length; i++) {
                const root = document.getElementById(`${widgets[i].id}`);

                if (root && JSON.stringify(widgets[i]) !== '{}') {
                    ReactDOM.render(<YoutAppPreview widget={widgets[i]} />, root);
                }
            }
        }
    })
    .catch((err) => console.log('err :>> ', err));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
