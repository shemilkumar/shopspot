import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { ActionTypes } from "../Redux/constants/actionTypes";

class FirebaseStorage {
  constructor() {}

  uploadImages(image, folderPath = "images") {
    return async function (dispatch) {
      const storage = getStorage();
      const storageRef = ref(storage, `${folderPath}/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // setProgress(prog);
        },
        (error) => console.log(error),
        () =>
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            dispatch({
              type: ActionTypes.ADD_PROFILE_PIC,
              payload: url,
            });
          })
      );
    };
  }
}

export default new FirebaseStorage();
