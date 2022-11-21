import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { ActionTypes } from "../Redux/constants/actionTypes";
import firebaseDbService from "./FirebaseDbService";

class FirebaseAuthService {
  constructor() {}

  signUpService(email, password, name) {
    try {
      return async function (dispatch) {
        //  Auth service
        createUserWithEmailAndPassword(auth, email, password)
          .then((credentials) => {
            // Storing user details on redux state
            dispatch({
              type: ActionTypes.SET_UID,
              payload: credentials.user,
            });

            // uploading user details on firebase
            // addDoc(userCollectionRef, {
            //   uid: credentials.user.uid,
            //   name,
            //   email,
            //   password,
            // });

            firebaseDbService.setUserData(credentials.user.uid, {
              name,
              email,
            });

            // const userDocRef = doc(db, "users", `${credentials.user.uid}`);

            // setDoc(userDocRef, {
            //   uid: credentials.user.uid,
            //   name,
            //   email,
            //   password,
            // })
            //   .then(() => console.log("User details added to the Database"))
            //   .catch((error) => console.log(error.message));

            // onAuthStateChanged(auth, (user) => {
            //   if (user) console.log(user);
            // });

            console.log("Data successfully saved in Storage");
          })
          .catch((err) => console.log(err.message));
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  loginService(email, password) {
    try {
      return async function (dispatch) {
        console.log("working");
        signInWithEmailAndPassword(auth, email, password)
          .then((credentials) => {
            // Storing user details on redux state
            dispatch({
              type: ActionTypes.SET_UID,
              payload: credentials.user,
            });
          })
          .catch((error) => console.log(error.message));
      };
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new FirebaseAuthService();
