const db = firebase.firestore();


db.collection('stores').get().then((snapshot) => {
    console.log(snapshot.docs);
})