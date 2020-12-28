import { firebase } from '@firebase/app'
import {firestore} from 'firebase/firestore'

const settings = {
    timestampsInSnapshots: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
};

const config = {
    /* YOUR FIREBASE CONFIG HERE */
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
firebase.firestore().enablePersistence();

export default firebase;