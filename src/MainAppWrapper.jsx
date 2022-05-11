import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import "./firebase";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

const MainAppWrapper = () => {
  // ref to track page render
  const pageRenderRef = useRef(0);

  //   Our context api with our data
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    if (pageRenderRef.current === 0) {
      const auth = getAuth();

      auth.onAuthStateChanged((user) => {
        console.log("User logged in >>>", user);

        if (user) {
          dispatch({
            type: "SET_USER",
            payload: user,
          });
        } else {
          dispatch({
            type: "SET_USER",
            payload: null,
          });
        }
      });
    }

    pageRenderRef.current = 1;
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="*" element={<h1>Page Not found</h1>}></Route>
        </Route>

        {/* Login Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainAppWrapper;
