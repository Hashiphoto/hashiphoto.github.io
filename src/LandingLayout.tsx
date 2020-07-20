import React from "react";
import styled from "styled-components";

interface LandingLayoutProps {}

const StyledLanding = styled.div`
  font: 12pt "Open Sans";
`;

const LandingLayout: React.FC = ({ children }) => {
  return <StyledLanding>{children}</StyledLanding>;
};

export default LandingLayout;
