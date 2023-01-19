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
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { ActionTypes } from "../Redux/constants/actionTypes";

class FirebaseDbService {
  constructor() {}

  storeCartProducts(product, uid, navigate, pass = false) {
    try {
      // console.log(uid);
      if (!uid) {
        navigate("/login");
        // console.log("yes");
        return;
      }

      const cartDocRef = doc(db, `Cart ${uid}`, `${product.id}`);

      setDoc(cartDocRef, {
        ...product,
        quantity: 1,
        subTotal: product.price,
      })
        .then(() => {
          if (pass) navigate("/cart");
          else {
            // alert("product added");
          }
        })
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
          // console.log(cartProducts);
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

  addDataCartProducts(uid, id, quantity, price) {
    try {
      return async function (dispatch) {
        const cartProductRef = doc(db, `Cart ${uid}`, `${id}`);

        console.log(+quantity);

        await updateDoc(cartProductRef, {
          quantity: +quantity,
          subTotal: price * +quantity,
        });

        console.log("Data updated");
      };
    } catch (error) {
      console.log(error);
    }
  }

  deleteCartProduct(uid, id) {
    try {
      return async function (dispatch) {
        await deleteDoc(doc(db, `Cart ${uid}`, `${id}`));
        console.log("deleted successfully");
      };
    } catch (error) {
      console.log(error);
    }
  }

  setUserData(uid, data) {
    const userDocRef = doc(db, "users", `${uid}`);

    data.firstName
      ? setDoc(userDocRef, {
          ...data,
          name: data.firstName + " " + data.lastName,
          uid,
        })
          .then(() => {
            console.log("User details added to the Database");
          })
          .catch((error) => console.log(error.message))
      : setDoc(userDocRef, {
          ...data,
          name: data.name,
          uid,
        })
          .then(() => {
            console.log("User details added to the Database");
          })
          .catch((error) => console.log(error.message));
  }

  getUserData(uid = null, anotherUser = false) {
    try {
      return async function (dispatch) {
        if (!uid) {
          dispatch({
            type: ActionTypes.SET_USER,
            payload: {},
          });

          return;
        }

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        // console.log(docSnap.data());
        if (docSnap.exists()) {
          anotherUser
            ? dispatch({
                type: ActionTypes.SET_USER_PROFILE,
                payload: docSnap.data(),
              })
            : dispatch({
                type: ActionTypes.SET_USER,
                payload: docSnap.data(),
              });

          // return docSnap.data();
        } else console.log("failed to get user data");
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getSingleUserData(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return false;
  }

  getAllUsers() {
    try {
      const allUsers = [];

      return async function (dispatch) {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);

        snapshot.forEach((doc) => allUsers.push(doc.data()));

        dispatch({
          type: ActionTypes.SET_ALL_USERS,
          payload: allUsers,
        });
      };
    } catch (error) {
      console.log(error);
    }
  }

  setSellProductData(uid, data, navigate) {
    // const sellProductDocRef = collection(db, "sellProducts");

    const sellProductDocRef = doc(db, "sellProducts", `${data.id}`);

    setDoc(sellProductDocRef, {
      uid,
      ...data,
    })
      .then(() => {
        console.log("Selling product details added to the Database");
        navigate("/profile");
      })
      .catch((error) => console.log(error.message));

    // addDoc(sellProductDocRef, {
    //   uid,
    //   ...data,
    // })
    //   .then(() => {
    //     console.log("Selling product details added to the Database");
    //     navigate("/profile");
    //   })
    //   .catch((error) => console.log(error.message));
  }

  getSellProduct(id) {
    try {
      return async function (dispatch) {
        dispatch({
          type: ActionTypes.GET_SINGLE_SELL_PRODUCT,
          payload: {},
        });

        const q = query(collection(db, "sellProducts"), where("id", "==", id));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          dispatch({
            type: ActionTypes.GET_SINGLE_SELL_PRODUCT,
            payload: doc.data(),
          });

          // console.log("hi", doc.data());
        });
      };
    } catch (error) {
      console.log(error);
    }
  }

  async deleteSellProductPost(id) {
    try {
      await deleteDoc(doc(db, "sellProducts", `${id}`));

      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  }

  getSellProductsByUser(uid, anotherUser = false) {
    try {
      return async function (dispatch) {
        const sellProducts = [];
        const q = query(
          collection(db, "sellProducts"),
          where("uid", "==", uid)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => sellProducts.push(doc.data()));

        anotherUser
          ? dispatch({
              type: ActionTypes.SET_SELL_PRODUCTS_BY_ANOTHER_USER,
              payload: sellProducts,
            })
          : dispatch({
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
