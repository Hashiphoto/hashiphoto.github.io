import React from "react";
import LandingLayout from "./LandingLayout";
import ProfileHeader from "./ProfileHeader";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #d1d1d1;
    color: black;
  }
`;

function App() {
  return (
    <LandingLayout>
      <GlobalStyle />
      <ProfileHeader></ProfileHeader>
    </LandingLayout>
  );
}

export default App;
