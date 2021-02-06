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

    let arr: [{}] = [{}];
    arr.pop();

        storageRef.listAll().then(categorie => {
            categorie.prefixes.forEach(folder =>{
                let imagesArr = new Array;
                folder.listAll().then(images =>{
                    images.items.forEach(img =>{
                            img.getDownloadURL().then((dlUrl: string)=>{
                            imagesArr.push(dlUrl)
                        })
                    })
                    arr.push({
                        name: folder.name,
                        images: imagesArr
                    })
                })
            })
        });
        
        return arr;
}
