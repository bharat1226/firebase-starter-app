// Wrapper function for signin method.

import firebase from 'firebase/app';

export const signIn = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
};
