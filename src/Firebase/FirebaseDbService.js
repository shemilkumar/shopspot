import { db } from "./firebase-config";

class FirebaseDbService {
  constructor() {}

  storeUserData({ name, email, password }, uid) {
    db.collection("users")
      .doc(uid)
      .set({
        name,
        email,
        password,
      })
      .then(() => {
        console.log("Data successfully saved in Storage");
      });
  }

  getUserData() {}
}

// export default new FirebaseDbService();
