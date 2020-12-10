import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Waffle from "./Waffle";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "./Login";
import { auth } from "../fbManager";
import { login, logout } from "../features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //logged out
        dispatch(logout);
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />

          <Waffle />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
