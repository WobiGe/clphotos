import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBTUl-EfLvvJ2BcMdWYvOehGIwHiJNFBpM",
    authDomain: "cl-photos.firebaseapp.com",
    projectId: "cl-photos",
    storageBucket: "cl-photos.appspot.com",
    messagingSenderId: "742308374958",
    appId: "1:742308374958:web:2487e9169771f5af56803f"
  };

const firebaseApp = firebase.initializeApp(config);
const storage = firebaseApp.storage();
const storageRef = storage.refFromURL("gs://cl-photos.appspot.com/categories");

export const getImage = () => {
    const ref = storage.refFromURL("gs://cl-photos.appspot.com/categories/Natur/pic_6.jpg");
    return new Promise<string>((resolve) => {
        ref.getDownloadURL().then((url: string) => {
            resolve(url);
        })
    })
}

export const getAllImages = () => {
    storageRef.listAll().then(res => {
        res.prefixes.forEach(folder => {
            console.log(folder.name);
        });
        res.items.forEach(item => {
            console.log(item.name);
        })
    })
}
