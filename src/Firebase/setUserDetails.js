import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

function setUserData(uid, data) {
  const userDocRef = doc(db, "users", `${uid}`);

  setDoc(userDocRef, {
    ...data,
    uid,
  })
    .then(() => console.log("User details added to the Database"))
    .catch((error) => console.log(error.message));
}

export default setUserData;
