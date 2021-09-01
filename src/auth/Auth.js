import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { auth } from "../firebase/config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const setPersistenceSession = () => {
      let email = "...";
      let password = "...";

      auth
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          return auth.signInWithEmailAndPassword(email, password);
        })
        .catch((err) => console.error(err));
    };
    setPersistenceSession();
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
