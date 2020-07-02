// Node script to push data to firestore

// Run `node ./src/test/populateFirestore.js` in terminal
const firebase = require('firebase');
require('firebase/firestore');
const {
	reservations,
	restaurants,
	dateAvailabilities,
	reviews,
} = require('./testData');

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

// Gives reference to firestore
const db = firebase.firestore();

function populateCollection(collectionName, items) {
	return Promise.all(
		items.map((item) => {
			const { id, ...data } = item;
			return db.collection(collectionName).doc(id).set(data);
		})
	);
}

// To populate to our firestore

Promise.all([
	populateCollection('reservations', reservations),
	populateCollection('reviews', reviews),
	populateCollection('restaurants', restaurants),
	populateCollection('dateAvailabilities', dateAvailabilities),
])
	.then(() => {
		console.log('Done!');
		process.exit(0);
	})
	.catch((err) => {
		console.log(err);
	});
