import firebase from 'firebase'

const config = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
  };

const firebaseApp = firebase.initializeApp(config);
const storage = firebaseApp.storage();
export let getAllImages = (path:string) => {
    const storageRef = storage.refFromURL("gs://cl-photos.appspot.com/"+path);
    let arr: [{}] = [{}];
    arr.pop();

    if(path === "mainpage"){
        let imagesArr = new Array;
        storageRef.listAll().then(images => {
            images.items.forEach(img =>{
                img.getDownloadURL().then((dlUrl: string)=>{
                    imagesArr.push(dlUrl);
                })
            })
        })

        return imagesArr;
        
    }else{
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
    }
        return arr;
}
