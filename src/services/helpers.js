import { productos } from '../data/products';
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc
} from 'firebase/firestore'

import * as con from "../utils/GlobalConstants"

const firebaseConfig = {
  apiKey: "AIzaSyBcLLS4Mu-f2VFElsg7YSmSzdRATFHyuE8",
  authDomain: "suministros-c46f2.firebaseapp.com",
  projectId: "suministros-c46f2",
  storageBucket: "suministros-c46f2.appspot.com",
  messagingSenderId: "888640092946",
  appId: "1:888640092946:web:1d4d1989a3e7ab7b38d1cb",
  measurementId: "G-NT5R59NJD1"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export async function exportData() {
    const productsCollectionRef = collection(db, con.PRODUCTS_DB_NAME)

    for (let item of productos) {
        const res = await addDoc(productsCollectionRef, item)
    }
}

