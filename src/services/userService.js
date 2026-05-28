import { db } from "../firebase/config";

import {

  doc,
  setDoc

} from "firebase/firestore";

export async function createUser(userData) {

  await setDoc(

    doc(db, "users", userData.uid),

    userData

  );

}
