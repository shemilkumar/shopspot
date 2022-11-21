import { db } from "./firebase-config";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  getDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { ActionTypes } from "../Redux/constants/actionTypes";

class FirebaseDbService {
  constructor() {}

  storeCartProducts(product, uid) {
    try {
      // console.log(uid);
      const cartDocRef = doc(db, `Cart ${uid}`, `${product.id}`);

      setDoc(cartDocRef, product)
        .then(() => alert("Product added to the cart"))
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }

  getCartProducts(uid) {
    try {
      return async function (dispatch) {
        const cartProducts = [];
        const querySnapshot = await getDocs(collection(db, `Cart ${uid}`));

        querySnapshot.forEach((doc) => {
          cartProducts.push(doc.data());
          console.log(cartProducts);
        });

        dispatch({
          type: ActionTypes.ADD_CART_PRODUCT,
          payload: cartProducts,
        });

        return cartProducts;
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  setUserData(uid, data) {
    const userDocRef = doc(db, "users", `${uid}`);

    setDoc(userDocRef, {
      ...data,
      uid,
    })
      .then(() => console.log("User details added to the Database"))
      .catch((error) => console.log(error.message));
  }

  getUserData(uid) {
    try {
      return async function (dispatch) {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        // console.log(docSnap.data());
        if (docSnap.exists()) {
          dispatch({
            type: ActionTypes.SET_USER,
            payload: docSnap.data(),
          });
        }
      };
    } catch (error) {
      console.log(error);
    }
  }

  setSellProductData(uid, data) {
    const sellProductDocRef = collection(db, "sellProducts");

    addDoc(sellProductDocRef, {
      uid,
      ...data,
    })
      .then(() => console.log("Selling product details added to the Database"))
      .catch((error) => console.log(error.message));
  }

  getSellProductsByUser(uid) {
    try {
      return async function (dispatch) {
        const sellProducts = [];
        const q = query(
          collection(db, "sellProducts"),
          where("uid", "==", uid)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => sellProducts.push(doc.data()));

        sellProducts.length > 0 &&
          dispatch({
            type: ActionTypes.SET_SELL_PRODUCTS_BY_USER,
            payload: sellProducts,
          });
      };
    } catch (error) {
      console.log(error);
    }
  }

  getAllSellProducts() {
    try {
      return async function (dispatch) {
        const allSellProducts = [];

        const querySnapshot = await getDocs(collection(db, "sellProducts"));

        querySnapshot.forEach((doc) => allSellProducts.push(doc.data()));

        allSellProducts.length > 0 &&
          dispatch({
            type: ActionTypes.SET_SELL_PRODUCTS,
            payload: allSellProducts,
          });

        // console.log(allSellProducts);
      };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FirebaseDbService();
