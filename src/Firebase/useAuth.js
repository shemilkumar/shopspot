import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function useAuth() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    if (sub) return sub.uid;
  }, []);

  if (currentUser) return currentUser.uid;
  else return null;
}

export default useAuth;
