import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, userCollectionRef } from "./firebase-config";
import { addDoc } from "firebase/firestore";
import { ActionTypes } from "../Redux/constants/actionTypes";

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
            addDoc(userCollectionRef, {
              uid: credentials.user.uid,
              name,
              email,
              password,
            });

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
