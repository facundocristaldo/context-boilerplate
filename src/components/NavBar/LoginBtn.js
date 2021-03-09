import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import AuthContext from "../../context/auth-context/auth-context";

export default function LoginBtn() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <Button variant="contained" onClick={authContext.login}>
      {authContext.isAuth ? "Logout" : "Login"}
    </Button>
  );
}
