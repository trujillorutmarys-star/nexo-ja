import { db } from "../firebase/config";


import {
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";

export async function createUser(userData) {

  await setDoc(
    doc(db, "users", userData.uid),
    userData
  );

}

export async function getUser(uid) {

  const docRef = doc(db, "users", uid);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {

    return docSnap.data();

  }

  return null;

}