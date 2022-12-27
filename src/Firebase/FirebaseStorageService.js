import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Alert from "../Helper/Alert";
import { ActionTypes } from "../Redux/constants/actionTypes";

class FirebaseStorage {
  constructor() {}

  uploadSellProductImages(images, folderPath) {
    return async function (dispatch) {
      const storage = getStorage();
      const imageLinks = [];

      images.map((image) => {
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
              imageLinks.push(url);
            })
        );
      });
      dispatch({
        type: ActionTypes.ADD_IMAGE_LINKS,
        payload: imageLinks,
      });
    };
  }

  uploadImage(image, folderPath = "images") {
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
            // console.log(url);
            dispatch({
              type: ActionTypes.ADD_IMAGE,
              payload: url,
            });
            // <Alert />;
          })
      );
    };
  }

  uploadThumbnail(image, folderPath) {
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
            // console.log(url);
            dispatch({
              type: ActionTypes.ADD_THUMBNAIL,
              payload: url,
            });

            alert("Images uploaded successfully");
            // <Alert />;
          })
      );
    };
  }
}

export default new FirebaseStorage();
