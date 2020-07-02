import firebase from 'firebase/app';

export const getCurrentUser = () => {
	return firebase.auth().currentUser;
};
