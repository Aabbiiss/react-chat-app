import React from "react";
import { auth } from "../firebase";
import { Button } from "@mantine/core";

const SignOut = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10",
      }}
    >
      <Button 
      onClick={() => auth.signOut()}> Sign Out </Button>
    </div>
  );
};

export default SignOut;
