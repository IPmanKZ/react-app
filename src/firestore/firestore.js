import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import  config  from '../config/default.json'

const firebaseConfig = config.firebaseConfig  

let instance;

export const getFirebase = () => {
    instance = initializeApp(firebaseConfig);
    const db = getFirestore(instance);
    return db;
}
