// import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { USER_SUBSCRIPTION } from "../graphql";

import { FINGER_MORA } from "../constants";
import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../graphql";

import LeaderBoard from "./LeaderBoard";
import useUser from "../hooks/useUser";
import Register from "./Register";
import Lobby from "./Lobby";
import Login from "./Login";
import About from "./About";
import FlappyBirdGamePage from "./flappybird/GamePage";
import RockPaperScissors from "./rock-paper-scissors/GamePage";
import Fingerexer from "./fingerexercise/GamePage";

const theme = createTheme({
  palette: {
    mode: "dark",
    type: "dark",
    primary: {
      main: "#7c9fff",
    },
    secondary: {
      main: "#ffde66",
    },
  },
});

const UserContext = createContext();

function App() {
  const { UserData, setUserData, handleLogout, handleSignUp } = useUser();
  const { loading, error, data, subscribeToMore } = useQuery(USER_QUERY, {
    variables: {
      game: FINGER_MORA,
    },
  });
  useEffect(() => {
    console.log("sub");
    subscribeToMore({
      document: USER_SUBSCRIPTION,
      variables: { game: FINGER_MORA },
      updateQuery: (prev, { subscriptionData }) => {
        console.log(subscriptionData);
        if (!subscriptionData.data) return prev;
        return { users: subscriptionData.data.userUpdated.data };
      },
    });
  }, [subscribeToMore]);
  return (
    <UserContext.Provider
      value={{
        UserData,
        setUserData,
        handleLogout,
        handleSignUp,
        loading,
        error,
        data,
        subscribeToMore,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/login/:username/leaderboard"
            element={
              <LeaderBoard
                loading={loading}
                error={error}
                data={data}
                subscribeToMore={subscribeToMore}
              />
            }
          />
          <Route path="/login/:username/lobby" element={<Lobby />} />
          <Route path="/login/:username/about" element={<About />} />
          <Route
            path="/login/:username/pose-flappy-bird"
            element={<FlappyBirdGamePage />}
          />
          <Route
            path="/login/:username/rock-paper-scissors"
            element={<RockPaperScissors />}
          />
          <Route
            path="/login/:username/fingerexercise"
            element={<Fingerexer />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export { App, UserContext };
