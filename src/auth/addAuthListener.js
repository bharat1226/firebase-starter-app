import firebase from 'firebase/app';

export const addAuthListener = (cb) => {
    // When user logs in or logs out ==> callback will be called.
	return firebase.auth().onAuthStateChanged(cb);
};
