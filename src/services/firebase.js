import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    writeBatch}
    from 'firebase/firestore'

  import Swal from 'sweetalert2/dist/sweetalert2.js';
  import 'sweetalert2/dist/sweetalert2.css';
    
// Global constants
import * as con from "../utils/GlobalConstants"

// TODO: ESTO DEBERIA IR EN UN ARCHIVO DE CONFIG QUE NO ESTE EN EL REPO
const firebaseConfig = {
  apiKey: "AIzaSyBcLLS4Mu-f2VFElsg7YSmSzdRATFHyuE8",
  authDomain: "suministros-c46f2.firebaseapp.com",
  projectId: "suministros-c46f2",
  storageBucket: "suministros-c46f2.appspot.com",
  messagingSenderId: "888640092946",
  appId: "1:888640092946:web:1d4d1989a3e7ab7b38d1cb",
  measurementId: "G-NT5R59NJD1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export async function getData () {
    const productsCollection = collection(db, con.PRODUCTS_DB_NAME);
    const productsSnapshot =  await getDocs(productsCollection);
    const arrayDocs = productsSnapshot.docs;

    const dataDocs = arrayDocs.map((doc) => {
        return {...doc.data(), id: doc.id}});
    return dataDocs;
}

export async function getItemData (idUrl) {
    const docRef = doc(db, con.PRODUCTS_DB_NAME, idUrl)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
      Swal.fire(
        '¡Lo sentimos!',
        'Este producto no existe',
        'error'
      )
      }
    return { id: docSnap.id, ... docSnap.data()}
}

export async function getCategoryData (CategoryId) {
    const productsCollectionRef = collection(db, con.PRODUCTS_DB_NAME);
    const q = query(productsCollectionRef, where(con.CATEGORY, '==', CategoryId))
    const productsSnapshot = await getDocs(q);
    const arrayDocs = productsSnapshot.docs;

    const dataDocs = arrayDocs.map((doc) => {
        return {...doc.data(), id: doc.id}});
    return dataDocs;

}

export async function createOrderWithStockUpdate(data) {
    const ordersCollectionRef = collection(db, con.ORDER_DB_NAME);
    const batch = writeBatch(db);
    const { items } = data;

    for (let itemInCart of items) {
        const refDoc = doc(db, con.PRODUCTS_DB_NAME, itemInCart[con.ID]);
        const docSnap = await getDoc(refDoc);

        const { stock } = docSnap.data();

        const stockToUpdate = stock - itemInCart[con.QUANTITY];
        if (stockToUpdate < 0) {
          Swal.fire(
            '¡Lo sentimos!, No hay suficiente stock de:',
             `${itemInCart[con.NAME]}, actualmente contamos con ${stock} unidades `,
            'error'
          )
          throw new Error('¡Lo sentimos!, No hay suficiente stock.');
        } else {
          const docRef = doc(db, con.PRODUCTS_DB_NAME, itemInCart[con.ID]);
          batch.update(docRef, { stock: stockToUpdate });
        }
    }

    await batch.commit();
    const response = await addDoc(ordersCollectionRef, data);
  
    return response.id;
}

export async function getOrderData (idUrl) {
  const docRef = doc(db, con.ORDER_DB_NAME, idUrl)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    Swal.fire(
      '¡Lo sentimos!',
      'Esta compra no existe',
      'error'
    )
    }
  return { id: docSnap.id, ... docSnap.data()}
}
