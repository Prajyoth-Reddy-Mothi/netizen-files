db.collection('stores').get().then((snapshot) => {
    console.log(snapshot.docs);
})