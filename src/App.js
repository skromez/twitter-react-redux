import React from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Main from "./components/Main";
import Modal from "./components/Modal";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Main />
      <Modal name="Dmitry Novikov" nick="skromez" />
      <SignUp />
      <Login />
    </div>
  );
};

export default App;
