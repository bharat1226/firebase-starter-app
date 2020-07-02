import firebase from 'firebase/app';

// Get user info from firestore collection.
export const getUserInfo = async (userId) => {
	// Returns document snapshot
	const userInfoDoc = await firebase
		.firestore()
		.collection('users')
		.doc(userId)
		.get();
	const userInfo = userInfoDoc.data();

	if (!userInfo) return null;
	return {
		id: userInfoDoc.id,
		...userInfo,
	};
};
