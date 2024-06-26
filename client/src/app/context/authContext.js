"use client";

import { createContext, useReducer } from "react";
import { API } from "@/utils/utils";

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
      
      const data=await API.post("/auth/signup",body);
      return data?.data;

    } catch (error) {
        console.log(error);
    }
}

export const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SIGN_UP":
      delete action.payload.msg
      localStorage.setItem("5:30Social",JSON.stringify(action.payload));
      return action.payload
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
