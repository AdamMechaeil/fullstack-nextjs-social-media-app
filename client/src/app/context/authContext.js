"use client";

import { createContext, useReducer } from "react";

let authData = {};

if (typeof window == "undefined") {
  authData = {
    token: "",
    userId: "",
  };
} else {
  authData = JSON.parse(localStorage.getItem("5:30Pmproject"));
}

async function signin(body) {
  try {

  } catch (error) {
    console.log(error);
  }
}

async function signup(body){
    try {
        
    } catch (error) {
        console.log(error);
    }
}

export const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SIGN_IN":

    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, authData);
  return (
    <AuthContext.Provider value={{ authData: state, dispatch,signin,signup }}>
      {children}
    </AuthContext.Provider>
  );
};
