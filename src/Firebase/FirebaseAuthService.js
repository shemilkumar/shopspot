import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { ActionTypes } from "../Redux/constants/actionTypes";
import firebaseDbService from "./FirebaseDbService";

class FirebaseAuthService {
  constructor() {}

  signUpService(email, password, name, navigate) {
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

            console.log(name);

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
            navigate("/");
            console.log("Data successfully saved in Storage");
          })
          .catch((err) => alert(err.message));
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  loginService(email, password, navigate) {
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

            navigate("/");
          })
          .catch((error) => alert(error.message));
      };
    } catch (error) {
      console.log("k");
    }
  }

  signOutService() {
    return async function (dispatch) {
      signOut(auth).then(() => {
        console.log("signOut");

        dispatch({
          type: ActionTypes.SET_USER,
          payload: {},
        });

        dispatch({
          type: ActionTypes.SET_SELL_PRODUCTS_BY_USER,
          payload: [],
        });
      });
    };
  }
}

export default new FirebaseAuthService();
