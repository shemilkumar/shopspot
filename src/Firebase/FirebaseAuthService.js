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
          .catch((err) => {
            // console.log(err.message.toString());
            if (err.message.toString().includes("email-already-in-use"))
              alert("This email is already in use, Please enter another email");

            if (err.message.toString().includes("at least 6 characters"))
              alert("Password should contain atleast 6 characters");
          });
      };
    } catch (error) {
      console.log(error);
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
          .catch((err) => {
            console.log(err);
            if (err.message.toString().includes("user-not-found"))
              alert(
                "Incorrect email, if you are a new user please create account first"
              );

            if (err.message.toString().includes("wrong-password"))
              alert("Incorrect password, Please enter password carefully");
          });
      };
    } catch (error) {
      console.log(error);
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
