import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import YoutAppPreview from './components/YoutAppPreview';

const API_HOST = 'https://arena-wishlist-test.ngrok.io';
const STORE_NAME =
    window.location.host.indexOf('localhost') >= 0
        ? 'hahalolo.myshopify.com'
        : window.location.host;

fetch(`${API_HOST}/app/yout-app?store_name=${STORE_NAME}`)
    .then((response) => response.json())
    .then((res) => {
        if (res.success && res.payload.widgets.length) {
            const widgets = res.payload.widgets;

            for (let i = 0; i < widgets.length; i++) {
                const root = document.getElementById(`${widgets[i].id}`);

                if (root && JSON.stringify(widgets[i]) !== '{}' && widgets[i].enabled) {
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
