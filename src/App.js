import "./App.css";
import { Box, Container, Typography } from "@material-ui/core";
import AuthContext from "./context/auth-context/auth-context";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [login, setLogin] = useState(false);
  const loginHandler = () => {
    setLogin(!login);
  };
  return (
    <>
      <AuthContext.Provider value={{ isAuth: login, login: loginHandler }}>
        <NavBar />
        <Box
          marginTop={"70px"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="calc(100vh - 70px)"
          width="100%"
          textAlign="center"
        >
          <Container>
            <Typography variant="h1" component="h1">
              Context API
            </Typography>
            <Typography variant="h4">Check login button</Typography>
          </Container>
        </Box>
      </AuthContext.Provider>
    </>
  );
}

export default App;
