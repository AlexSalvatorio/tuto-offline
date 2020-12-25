import { firebase } from '@firebase/app'
import {firestore} from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBZYfKcY5Coy20Vk2Cjg-kzFMzEheov_iU",
    authDomain: "labreactnative-d142b.firebaseapp.com",
    databaseURL: "https://labreactnative-d142b.firebaseio.com",
    projectId: "labreactnative-d142b",
    storageBucket: "labreactnative-d142b.appspot.com",
    messagingSenderId: "265682572620",
    appId: "1:265682572620:web:5296c623f8c5725bceebe9"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;