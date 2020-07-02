import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const firebaseConfig = {
	apiKey: 'AIzaSyDxz744raW2STA6rQxMr2X-O5npI6pkjVM',
	authDomain: 'restaurant-reservation-e2033.firebaseapp.com',
	databaseURL: 'https://restaurant-reservation-e2033.firebaseio.com',
	projectId: 'restaurant-reservation-e2033',
	storageBucket: 'restaurant-reservation-e2033.appspot.com',
	messagingSenderId: '404084047179',
	appId: '1:404084047179:web:c831fea2aa538d0d4cbcce',
	measurementId: 'G-PKZML6BG07',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
